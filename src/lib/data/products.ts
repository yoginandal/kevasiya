"use server"

import { sdk } from "@lib/config"
import { sortProducts } from "@lib/util/sort-products"
import { HttpTypes } from "@medusajs/types"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { getAuthHeaders, getCacheOptions } from "./cookies"
import { getRegion, retrieveRegion } from "./regions"

export const listProducts = async ({
  pageParam = 1,
  queryParams,
  countryCode,
  regionId,
}: {
  pageParam?: number
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
  countryCode?: string
  regionId?: string
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number }
  nextPage: number | null
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
}> => {
  if (!countryCode && !regionId) {
    throw new Error("Country code or region ID is required")
  }

  const limit = queryParams?.limit || 12
  const _pageParam = Math.max(pageParam, 1)
  const offset = _pageParam === 1 ? 0 : (_pageParam - 1) * limit

  let region: HttpTypes.StoreRegion | undefined | null

  if (countryCode) {
    region = await getRegion(countryCode)
  } else {
    region = await retrieveRegion(regionId!)
  }

  if (!region) {
    return {
      response: { products: [], count: 0 },
      nextPage: null,
    }
  }

  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("products")),
  }

  return sdk.client
    .fetch<{ products: HttpTypes.StoreProduct[]; count: number }>(
      `/store/products`,
      {
        method: "GET",
        query: {
          limit,
          offset,
          region_id: region?.id,
          fields:
            "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
          ...queryParams,
        },
        headers,
        next,
        cache: "force-cache",
      }
    )
    .then(({ products, count }) => {
      const nextPage = count > offset + limit ? pageParam + 1 : null

      return {
        response: {
          products,
          count,
        },
        nextPage: nextPage,
        queryParams,
      }
    })
}

/**
 * This will fetch 100 products to the Next.js cache and sort them based on the sortBy parameter.
 * It will then return the paginated products based on the page and limit parameters.
 */
export const listProductsWithSort = async ({
  page = 0,
  queryParams,
  sortBy = "created_at",
  countryCode,
}: {
  page?: number
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
  sortBy?: SortOptions
  countryCode: string
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number }
  nextPage: number | null
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
}> => {
  const limit = queryParams?.limit || 12

  const {
    response: { products, count },
  } = await listProducts({
    pageParam: 0,
    queryParams: {
      ...queryParams,
      limit: 100,
    },
    countryCode,
  })

  const sortedProducts = sortProducts(products, sortBy)

  const pageParam = (page - 1) * limit

  const nextPage = count > pageParam + limit ? pageParam + limit : null

  const paginatedProducts = sortedProducts.slice(pageParam, pageParam + limit)

  return {
    response: {
      products: paginatedProducts,
      count,
    },
    nextPage,
    queryParams,
  }
}

// Define a simplified type for the raw product data from Medusa API
// This should be adjusted based on the actual fields you need and get from your backend
interface MedusaApiProduct {
  id: string
  title: string
  handle: string | null // handle can be null
  thumbnail: string | null
  variants: {
    prices: {
      amount: number
      currency_code: string
    }[]
  }[]
  // Add other fields you might need from Medusa, e.g.:
  // description?: string;
  // images?: { url: string }[];
  // options?: any[];
  // collection?: { title: string; handle: string };
  // status?: string;
}

// Re-export or define the Product type that your UI components expect
// This is the same as in best-sellers/index.tsx. Keep them in sync or import from a shared types file.
export interface UiProduct {
  id: string
  title: string
  thumbnail?: string | null
  handle: string
  price: number
  variantId?: string
  currencySymbol?: string
  isNew?: boolean
  discountPrice?: number
}

export async function getStoreProducts(count: number): Promise<UiProduct[]> {
  try {
    const { products: medusaProducts } = await sdk.store.product.list({
      limit: count,
      fields:
        "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
    })

    if (!medusaProducts) {
      return []
    }

    const transformedProducts: UiProduct[] = medusaProducts.map((p) => {
      let productPrice = 0
      let currency = "usd"
      const firstVariant = p.variants?.[0]

      if (firstVariant?.calculated_price?.calculated_amount !== undefined) {
        const priceInfo = firstVariant.calculated_price
        productPrice = (priceInfo.calculated_amount || 0) / 100
        currency = priceInfo.currency_code || "usd"
      }

      const productHandle = p.handle || p.id

      return {
        id: p.id,
        title: p.title,
        thumbnail: p.thumbnail || undefined,
        handle: productHandle,
        price: productPrice,
        variantId: firstVariant?.id,
        currencySymbol:
          currency.toUpperCase() === "USD"
            ? "$"
            : currency.toUpperCase() === "EUR"
            ? "€"
            : currency.toUpperCase(),
        isNew: false,
        discountPrice: undefined,
      }
    })

    return transformedProducts
  } catch (error) {
    console.error("Error fetching or transforming Medusa products:", error)
    return [] // Return empty array on error to prevent breaking the page
  }
}

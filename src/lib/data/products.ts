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
  thumbnail?: string | null // Allow null or undefined
  handle: string
  price: number
  currencySymbol?: string
  isNew?: boolean // This might not come from Medusa directly
  discountPrice?: number // This might not come from Medusa directly
}

export async function getStoreProducts(
  limit: number = 4
): Promise<UiProduct[]> {
  const medusaBackendUrl =
    process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

  try {
    const response = await fetch(
      `${medusaBackendUrl}/store/products?limit=${limit}`,
      {
        next: { revalidate: 60 }, // Optional: ISR, revalidate every 60 seconds
      }
    )

    if (!response.ok) {
      // Log the error or throw a more specific error to be caught by the caller
      const errorBody = await response.text()
      console.error(
        `Failed to fetch products: ${response.status} ${response.statusText}`,
        errorBody
      )
      throw new Error(`Failed to fetch products. Status: ${response.status}`)
    }

    const { products: medusaProducts } = (await response.json()) as {
      products: MedusaApiProduct[]
    }

    if (!medusaProducts) {
      console.warn(
        "No products found in API response or response format is unexpected."
      )
      return []
    }

    // Transform Medusa products to the structure your UI component expects (UiProduct)
    const transformedProducts: UiProduct[] = medusaProducts.map((p) => {
      let productPrice = 0
      let currency = "usd" // Default currency

      if (
        p.variants &&
        p.variants.length > 0 &&
        p.variants[0].prices &&
        p.variants[0].prices.length > 0
      ) {
        const priceInfo = p.variants[0].prices[0]
        productPrice = priceInfo.amount / 100 // Medusa prices are often in smallest currency unit
        currency = priceInfo.currency_code
      }

      // Ensure handle is a string, provide a fallback if null (though products should have handles)
      const productHandle = p.handle || p.id

      return {
        id: p.id,
        title: p.title,
        thumbnail: p.thumbnail || undefined, // Ensure undefined if null for component
        handle: productHandle,
        price: productPrice,
        currencySymbol:
          currency.toUpperCase() === "USD"
            ? "$"
            : currency.toUpperCase() === "EUR"
            ? "€"
            : currency.toUpperCase(),
        // isNew and discountPrice would require custom logic or specific Medusa fields
        isNew: false, // Placeholder
        // discountPrice: undefined, // Placeholder
      }
    })

    return transformedProducts
  } catch (error) {
    console.error("Error fetching or transforming Medusa products:", error)
    return [] // Return empty array on error to prevent breaking the page
  }
}

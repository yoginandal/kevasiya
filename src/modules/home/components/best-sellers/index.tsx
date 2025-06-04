import Image from "next/image"
import Link from "next/link"
import React from "react"
import { UiProduct as Product } from "../../../../lib/data/products"

// Define the props for the BestSeller component
interface BestSellerProps {
  products: Product[]
  title?: string
}

const BestSeller: React.FC<BestSellerProps> = ({
  products,
  title = "Our Best Sellers",
}) => {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our most popular items, loved by customers like you.
          </p>
          <div className="mt-6 w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              href={`/products/${product.handle}`}
              key={product.id}
              legacyBehavior
            >
              <a className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  {product.thumbnail && (
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  )}
                  {!product.thumbnail && (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">No image</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Best Seller
                  </div>
                  {product.isNew && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      New
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-sky-600 transition-colors duration-300 truncate">
                    {product.title}
                  </h3>
                  <div className="mt-2 flex items-baseline">
                    <span
                      className={`text-xl font-bold ${
                        product.discountPrice
                          ? "text-red-500"
                          : "text-slate-700"
                      }`}
                    >
                      {product.currencySymbol || "$"}
                      {product.discountPrice !== undefined
                        ? product.discountPrice.toFixed(2)
                        : product.price.toFixed(2)}
                    </span>
                    {product.discountPrice !== undefined && (
                      <span className="ml-2 text-sm text-slate-500 line-through">
                        {product.currencySymbol || "$"}
                        {product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      console.log(`Add to cart: ${product.title}`)
                    }}
                    className="mt-4 w-full bg-sky-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSeller

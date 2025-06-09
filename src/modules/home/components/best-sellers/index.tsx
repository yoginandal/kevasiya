"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#3a5a40] mb-4 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5a6d5c] max-w-2xl mx-auto">
            Discover our most popular items, loved by customers like you.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#AE8F65] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <div className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                <Link href={`/products/${product.handle}`} className="block">
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
                    <div className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                      Best Seller
                    </div>
                    {product.isNew && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                        New
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold font-serif text-[#3a5a40] group-hover:text-[#AE8F65] transition-colors duration-300 truncate">
                    <Link href={`/products/${product.handle}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <div className="mt-2 flex items-baseline flex-grow">
                    <span
                      className={`text-xl font-bold font-serif ${
                        product.discountPrice
                          ? "text-red-500"
                          : "text-[#3a5a40]"
                      }`}
                    >
                      {product.currencySymbol || "€"}
                      {product.discountPrice !== undefined
                        ? product.discountPrice.toFixed(2)
                        : product.price.toFixed(2)}
                    </span>
                    {product.discountPrice !== undefined && (
                      <span className="ml-2 text-sm text-slate-500 line-through">
                        {product.currencySymbol || "€"}
                        {product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      console.log("Add to cart clicked")
                    }}
                    className="mt-4 w-full bg-[#AE8F65] text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-[#997e58] focus:outline-none focus:ring-2 focus:ring-[#AE8F65] focus:ring-offset-2 transition-all duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BestSeller

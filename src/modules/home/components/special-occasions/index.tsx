import Link from "next/link"
import React from "react"
import { FaBirthdayCake, FaHeart, FaHome, FaBaby } from "react-icons/fa" // Example icons

interface Occasion {
  id: string
  name: string
  href: string
  icon?: React.ElementType // For react-icons or similar SVG components
  imageUrl?: string // For background images on cards
  description?: string
}

const occasionsData: Occasion[] = [
  {
    id: "birthdays",
    name: "Birthdays",
    href: "/occasions/birthdays",
    icon: FaBirthdayCake,
    description: "Find the perfect gift to celebrate another year.",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    href: "/occasions/anniversary",
    icon: FaHeart,
    description: "Mark your special milestone with a thoughtful present.",
  },
  {
    id: "house-warming",
    name: "House Warming",
    href: "/occasions/house-warming",
    icon: FaHome,
    description: "Welcome them to their new home with a lovely gift.",
  },
  {
    id: "baby-shower",
    name: "Baby Shower",
    href: "/occasions/baby-shower",
    icon: FaBaby,
    description: "Celebrate the new arrival with adorable presents.",
  },
  // Add more occasions as needed
]

const SpecialOccasions: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight">
            Gifts for Every Occasion
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Making every celebration memorable with the perfect present.
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gray-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasionsData.map((occasion) => {
            const IconComponent = occasion.icon
            return (
              <Link href={occasion.href} key={occasion.id} legacyBehavior>
                <a className="group block bg-white rounded-xl shadow-lg hover:shadow-pink-200/50 hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1 aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
                  {IconComponent && (
                    <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  )}
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
                    {occasion.name}
                  </h3>
                  {occasion.description && (
                    <p className="mt-2 text-sm text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {occasion.description}
                    </p>
                  )}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SpecialOccasions

import React from "react"
import { FiTruck, FiGift, FiCheckSquare, FiSmile } from "react-icons/fi" // Example icons

interface Benefit {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

const benefitsData: Benefit[] = [
  {
    id: "shipping",
    title: "Pan India Shipping",
    description: "Delivering smiles across the nation, wherever you are.",
    icon: FiTruck,
  },
  {
    id: "personalized",
    title: "Personalized Gifts",
    description: "Unique, custom-made gifts that tell a personal story.",
    icon: FiGift,
  },
  {
    id: "selection",
    title: "Diverse Selection",
    description: "A wide array of choices to suit every taste and occasion.",
    icon: FiCheckSquare,
  },
  {
    id: "expectations",
    title: "Exceed Expectations",
    description: "Committed to quality and service that goes above and beyond.",
    icon: FiSmile,
  },
]

const WhyKevasiya: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-900">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3a5a40] font-extrabold tracking-tight ">
            Why Choose <span className="text-kevasiya-gold">Kevasiya</span>?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our commitment to quality and
            customer satisfaction.
          </p>
          <div className="mt-6 w-24 h-1.5 bg-kevasiya-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={benefit.id}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-kevasiya-gold/20 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-kevasiya-gold/10 rounded-full mb-6">
                  <IconComponent className="w-10 h-10 text-kevasiya-gold" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyKevasiya

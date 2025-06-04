"use client"

import { useState } from "react"

const faqData = [
  "How do I place an order?",
  "Can I customize an order?",
  "Does the price of the product change for customized orders?",
  "What are the available payment methods?",
  "Can I make changes or cancel my order after it's been placed?",
  "Are the product colors shown on the website accurate?",
  "What if I order multiple products?",
  "How long will it take to receive my order?",
]

export default function Component() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3A5834F5] to-[#3A5834F5] flex items-center justify-center pt-8 flex-col">
      <div className="w-full max-w-2xl px-8 sm:px-0">
        <h1 className="text-4xl font-serif text-white text-center mb-12">FAQs</h1>

        <div className="space-y-1">
          {faqData.map((question, index) => (
            <div key={index} className="border-b border-green-700/50">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-6 px-2 text-left text-white hover:bg-green-700/20 transition-colors duration-200 group"
              >
                <span className="text-lg font-light pr-4">{question}</span>
                <span
                  className={`text-2xl font-light transition-transform duration-200 ${
                    openItems.includes(index) ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {openItems.includes(index) && (
                <div className="px-2 pb-6 text-white/80 text-base leading-relaxed animate-fadeIn">
                  <p>
                    This is where the answer to "{question}" would appear. You can add detailed information,
                    instructions, or any relevant content here.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-full py-5 bg-[#FBE0C2]">
        <p className="text-[#3A5834F5] text-center">Copyright © 2025 All Rights Reserved</p>
      </div>
    </div>
  )
}

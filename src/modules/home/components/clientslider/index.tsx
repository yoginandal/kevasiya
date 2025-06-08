// import Heading from "../../../../app/uiComponents/heading"
import IconMarquee from "../../../../app/uiComponents/IconMarquee"

import React from "react"

interface ClientsSliderProps {
  icons: { src: string; alt: string }[]
}

// Assuming defaultItemAnimationVariants is available or can be imported/defined
// For now, to satisfy the type, let's use a placeholder.
// Ideally, you'd import or define the actual variants structure.
const slideUpVariants = {
  /* structure based on TextAnimate's expected variants */
}

export function ClientsSlider({ icons }: ClientsSliderProps) {
  return (
    <section className="py-16 container mx-auto px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-center font-semibold text-4xl md:text-5xl font-serif text-[#3a5a40] mb-8 md:mb-16">
          Trusted By
        </h2>

        <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>

        <div className="mt-10">
          <IconMarquee icons={icons} />
        </div>
      </div>
    </section>
  )
}

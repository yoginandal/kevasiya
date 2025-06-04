import Heading from "../../../../app/uiComponents/heading"
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
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <Heading title={"Clients Slider"} />

        <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        <div className="mt-10">
          <IconMarquee icons={icons} />
        </div>
      </div>
    </section>
  )
}

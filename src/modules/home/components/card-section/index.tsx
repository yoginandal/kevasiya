"use client"

import Card from "../../../../app/uiComponents/card"
import SectionHeading from "../../../../app/uiComponents/heading"

export default function CardSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="Our Unique Card Layout"
        subtitle="Beautifully balanced 2-1-2 layout with unified alignment"
      />

      <div className="mt-16 grid gap-12">
        {/* Top 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            image="/cardImages/cardOne.webp"
            title="Feature Card A"
            description="Highlighting a key aspect with beautiful styling"
          />
          <Card
            image="/cardImages/cardTwo.webp"
            title="Feature Card B"
            description="Showcasing another benefit of our services"
          />
        </div>

        {/* Center Card */}
        <div className="mx-auto w-full">
          <Card
            image="/cardImages/cardOne.webp"
            title="Central Showcase Card"
            description="Dominant focus item drawing major attention"
          />
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            image="/cardImages/cardOne.webp"
            title="Support Card X"
            description="Detailing support or extra insights"
          />
          <Card
            image="/cardImages/cardTwo.webp"
            title="Support Card Y"
            description="Additional information or call-to-action"
          />
        </div>
      </div>
    </section>
  )
}

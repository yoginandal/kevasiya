"use client"

import Card from "../../../../app/uiComponents/card"
// import SectionHeading from "../../../../app/uiComponents/heading"

export default function CardSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-center font-semibold text-4xl md:text-5xl font-serif text-[#3a5a40] mb-8 md:mb-16">
        Specially Curated
      </h2>

      <div className="mt-16 grid gap-12">
        {/* Top 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            image="/cardImages/cardOne.webp"
            title="Baby Announcement"
            description="A beautiful way to announce the arrival of your baby"
          />
          <Card
            image="/cardImages/cardTwo.webp"
            title="Festive Gifting"
            description="A beautiful way to gift your loved ones"
          />
        </div>

        {/* Center Card */}
        <div className="mx-auto w-full">
          <Card
            image="/cardImages/cardOne.webp"
            title="Corporate Gifting"
            description="A beautiful way to gift your loved ones"
          />
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            image="/cardImages/cardOne.webp"
            title="Wedding Gifts"
            description="A beautiful way to invite your loved ones"
          />
          <Card
            image="/cardImages/cardTwo.webp"
            title="Special Occasion"
            description="A beautiful way to gift your loved ones"
          />
        </div>
      </div>
    </section>
  )
}

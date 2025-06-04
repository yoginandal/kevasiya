import React from "react"
import Container from "../../components/Container"
import Image from "next/image"
import Button from "../../components/Button"
const GiftOcassion = () => {
  return (
    <Container className="lg:px-24">
      <section className="flex flex-col sm:flex-row gap-4 justify-between items-center ">
        <div className="relative grid h-max space-y-10 sm:w-[500px] ">
          <h1 className="text-left text-4xl md:text-5xl font-semibold font-serif text-[#3a5a40] ">
            Gifts for Every Occasion
          </h1>
          <p className="text-left text-xl leading-relaxed sm:text-3xl text-gray-700">
            Bespoke Gifts and Eco-friendly gifts, meticulously crafted to boost
            your brand's sophistication.
          </p>
          <Button className="!mt-4 text-3xl w-fit  sm:py-4 sm:px-8">
            Contact Us
          </Button>
        </div>
        <div className="relative mt-10  sm:mt-0 overflow-hidden rounded-t-full h-[500px] w-full sm:w-96 hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:-translate-y-2">
          <Image
            src="/images/occasion/occasion.webp"
            alt="Gift Ocassion"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 transition-colors z-10"></div>
          <div className="absolute bottom-10 left-0 right-0 text-center z-20">
            <h2 className="text-[#FBE0C2] text-3xl sm:text-5xl ">Birthday</h2>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default GiftOcassion

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Services = () => {
  return (
    <div className="bg-[#FBE0C2] py-16 px-4">
      <div className="container mx-auto sm:max-w-6xl px-8">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold font-serif text-[#4d5d4a] mb-10">What You&apos;ll Get</h2>

        {/* Main Card - Our Catalogue */}
        <div className="relative w-full h-64 md:h-80 mb-6 overflow-hidden rounded-t-sm">
          <Link href="/catalogue">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 transition-colors z-10"></div>
            <Image
              src="/images/serviceImage/services (1).webp"
              alt="Our catalogue of gift items including decorative boxes and gourmet foods"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-0 right-0 text-center z-20">
              <h3 className="text-[#f5e9d5] text-3xl font-serif">Our Catalogue</h3>
            </div>
          </Link>
        </div>

        {/* Three Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Custom Curated Gifts */}
          <div className="relative w-full h-52 md:h-64 overflow-hidden rounded-bl-sm">
            <Link href="/custom-gifts">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 transition-colors z-10"></div>
              <Image
                src="/images/serviceImage/services (2).webp"
                alt="Custom curated gift sets with decorative items"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                <h3 className="text-[#f5e9d5] text-2xl font-serif">Custom Curated Gifts</h3>
              </div>
            </Link>
          </div>

          {/* Gifting Consultation */}
          <div className="relative w-full h-52 md:h-64 overflow-hidden">
            <Link href="/consultation">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 transition-colors z-10"></div>
              <Image
                src="/images/serviceImage/services (3).webp"
                alt="Hands holding a red gift box"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                <h3 className="text-[#f5e9d5] text-2xl font-serif">Gifting Consultation</h3>
              </div>
            </Link>
          </div>

          {/* Promotional Gifts */}
          <div className="relative w-full h-52 md:h-64 overflow-hidden rounded-br-sm">
            <Link href="/promotional-gifts">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 transition-colors z-10"></div>
              <Image
                src="/images/serviceImage/services (4).webp"
                alt="Promotional items including laptop bag and branded products"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                <h3 className="text-[#f5e9d5] text-2xl font-serif">Promotional Gifts</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
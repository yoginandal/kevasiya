import React from 'react'
import Container from '../../components/Container'
import Link from 'next/link'
import Image from 'next/image'
const GiftCategories = () => {
  return (
    <Container className='lg:px-24'>
        {/* Main Heading */}
      <h1 className="text-center font-semibold text-4xl md:text-5xl font-serif text-[#3a5a40] mb-8 md:mb-16">
        Corporate Gift Categories
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Rewards & Recognition - Large Left Card */}
        <div className="md:col-span-5 relative overflow-hidden  sm:rounded-bl-[7rem] h-80 sm:h-[600px]">
          <Link href="#rewards-recognition">
            {/* <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors z-10 rounded-lb-3xl"></div> */}
            <Image
              src="/images/categories/categories (1).webp"
              alt="Rewards and recognition gift box with wine and gourmet items"
              fill
              className="object-cover "
            />
            <div className="absolute bottom-8 left-0 right-0 text-center z-20">
              <h2 className="text-white text-3xl font-serif">
                Rewards &<br />
                recognition
              </h2>
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-colors z-10'></div>
          </Link>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 grid grid-cols-1 gap-4 md:gap-6">
          {/* Work Anniversary - Large Top Card */}
          <div className="relative overflow-hidden sm:rounded-tr-[7rem] h-80 sm:h-[345px]">
            <Link href="#work-anniversary">
              {/* <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors z-10 "></div> */}
              <Image
                src="/images/categories/categories (2).webp"
                alt="Work anniversary gift set with gourmet snacks and decorative items"
                fill
                className="object-cover "
              />
              <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                <h2 className="text-white text-3xl font-serif">Work Anniversary</h2>
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-colors z-10'></div>
            </Link>
          </div>

          {/* Bottom Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Employee Onboarding */}
            <div className="relative overflow-hidden  h-80 sm:h-[230px]">
              <Link href="#employee-onboarding">
                {/* <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors z-10 "></div> */}
                <Image
                  src="/images/categories/categories (3).webp"
                  alt="Employee onboarding gift basket with office supplies and treats"
                  fill
                  className="object-cover "
                />
                <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                  <h2 className="text-white text-3xl font-serif">
                    Employee
                    <br />
                    Onboarding
                  </h2>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 transition-colors z-10'></div>
              </Link>
            </div>

            {/* Client Appreciation */}
            <div className="relative overflow-hidden  h-80 sm:h-[230px]">
              <Link href="#client-appreciation">
                {/* <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors z-10 "></div> */}
                <Image
                  src="/images/categories/categories (4).webp"
                  alt="Client appreciation gift set with premium items"
                  fill
                  className="object-cover "
                />
                <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                  <h2 className="text-white text-3xl font-serif">
                    Client
                    <br />
                    Appreciation
                  </h2>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-colors z-10'></div>
              </Link>
            </div>

            {/* Clients */}
            <div className="relative overflow-hidden   h-80 sm:h-[230px]">
              <Link href="#clients">
                {/* <div className="absolute inset-0 bg-black/20  hover:bg-black/30 transition-colors z-10 "></div> */}
                <Image
                  src="/images/categories/categories (5).webp"
                  alt="Client gift basket with premium products"
                  fill
                  className="object-cover "
                />
                <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                  
                  <h2 className="text-white text-3xl font-serif">Clients</h2>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-colors z-10'></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default GiftCategories
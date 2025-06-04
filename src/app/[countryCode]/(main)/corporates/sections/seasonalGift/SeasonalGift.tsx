import Container from '../../components/Container'
import React from 'react'
import Image from 'next/image'
const SeasonalGift = () => {
  return (
    <Container className='lg:px-24 sm:!pt-10 pt-0'>
        <h1 className='text-center font-semibold text-4xl md:text-5xl font-serif text-[#3a5a40] mb-8 md:mb-10'>Seasonal Gift</h1>
        
            <div className='relative overflow-hidden rounded-sm  h-40 aspect-video w-full sm:h-[550px] hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300'>
                <Image src='/images/seasonal-gift/seasonalGift.jpg' alt='Seasonal Gift' fill className='object-cover object-center hover:scale-105 transition-all duration-300' />
            </div>
      
    </Container>
  )
}

export default SeasonalGift
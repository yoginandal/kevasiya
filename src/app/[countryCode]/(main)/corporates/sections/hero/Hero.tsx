'use client'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden text-white">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/hero.png" // optional
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay (optional, improves text visibility) */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" /> */}

      {/* Hero Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-[900] mb-4">
          Find the Perfect Gift for Every Occasion
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          Discover thoughtfully curated gifts that bring joy and create lasting memories for your loved ones.
        </p>
      </div> */}
    </section>
  )
}

export default Hero

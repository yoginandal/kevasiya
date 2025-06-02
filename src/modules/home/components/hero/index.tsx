import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button, Badge } from "@medusajs/ui"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      {/* Color Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 opacity-90"></div>

      {/* Hero Content */}
      <div className="relative z-20 py-20 lg:py-20">
        <div className="container max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                  ✨ Perfect Gifts for Every Occasion
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Make Every
                  <span className="text-rose-500"> Moment </span>
                  Memorable
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed lg:max-w-xl">
                  Discover thoughtfully curated gifts that bring joy, create
                  memories, and show how much you care. From birthdays to
                  anniversaries, we have the perfect gift for everyone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="large"
                  className="bg-rose-500 hover:bg-rose-600 text-lg px-8"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="large"
                  className="text-lg px-8"
                >
                  Gift Finder
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Unique Gifts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end items-center">
              <div className="relative z-10">
                <video
                  src="/videos/hero_Video.mp4"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-rose-200 rounded-full opacity-25 blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-orange-200 rounded-full opacity-25 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

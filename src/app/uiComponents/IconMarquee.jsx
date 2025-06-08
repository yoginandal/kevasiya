import { cn } from "../../lib/utils"
import Marquee from "./marquee"

const ReviewCard = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-square w-32 rounded mx-4 object-contain hover:-translate-y-2 duration-300 ease-in-out"
    />
  )
}

export default function IconMarquee({ icons }) {
  const firstRow = icons?.slice(0, icons.length / 2)
  const secondRow = icons?.slice(icons.length / 2)

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:8s]">
        {firstRow?.map((icon, index) => (
          <ReviewCard key={`first-${index}`} {...icon} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:10s]">
        {secondRow?.map((icon, index) => (
          <ReviewCard key={`second-${index}`} {...icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}

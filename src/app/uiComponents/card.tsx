import Image from "next/image"

type CardProps = {
  title: string
  description: string
  image: string
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="relative bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-md overflow-hidden h-96 flex flex-col justify-end group">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover z-0 transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-20 p-6">
        <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow-md">
          {title}
        </h3>
        <p className="text-gray-200 drop-shadow-sm text-sm">{description}</p>
      </div>
    </div>
  )
}

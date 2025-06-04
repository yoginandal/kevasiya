type SectionHeadingProps = {
  title: string
  subtitle?: string
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  )
}

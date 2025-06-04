import QueryForm from "./query-form"
import Image from "next/image"
export default function Form() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/form/form.webp')" }}
    >
      {/* Main section with form on the left */}
      <div className="flex-1 flex items-center p-8">
        <div className="w-full sm:max-w-7xl sm:px-24  mx-auto flex ">
          <div className="w-full md:w-1/2">   
            <QueryForm />
          </div>
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </div>

      {/* Grid section with four equal divs */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 px-8 pb-8 sm:p-8">
        {["/images/form/form (1).webp", "/images/form/form (2).webp", "/images/form/form (3).webp", "/images/form/form (4).webp"].map((item) => (
          <div
            key={item}
            className="bg-white/30 backdrop-blur-sm rounded-lg shadow-lg p-4 aspect-square flex items-center justify-center overflow-hidden"
          >
            <Image
              src={`${item}`}
              alt={`Gift box ${item}`}
              className="w-full h-full object-cover rounded-md hover:scale-125 transition-all duration-300"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

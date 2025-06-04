import Hero from "./hero"
import CardSection from "../card-section"
import { ClientsSlider } from "../clientslider"
import BestSeller from "../best-sellers"
import {
  getStoreProducts,
  UiProduct as Product,
} from "../../../../lib/data/products"
import SpecialOccasions from "../special-occasions"
import WhyKevasiya from "../why-kevasiya"

const icons = [
  { src: "/recruiters/amazon.webp", alt: "amazon" },
  { src: "/recruiters/google.webp", alt: "google" },
  { src: "/recruiters/bankOfAmerica.webp", alt: "bankOfAmerica" },
  { src: "/recruiters/tcs.webp", alt: "tcs" },
  { src: "/recruiters/infosys.webp", alt: "infosys" },
  { src: "/recruiters/intel.webp", alt: "intel" },
  { src: "/recruiters/hdfc.webp", alt: "hdfc" },
  { src: "/recruiters/microsoft.png", alt: "microsoft" },
  { src: "/recruiters/accenture.webp", alt: "accenture" },
]

export default async function Home() {
  const bestSellingProducts: Product[] = await getStoreProducts(4)

  return (
    <div>
      <Hero />
      <CardSection />
      <ClientsSlider icons={icons} />
      <BestSeller products={bestSellingProducts} title="Our Best Sellers" />
      <SpecialOccasions />
      <WhyKevasiya />
    </div>
  )
}

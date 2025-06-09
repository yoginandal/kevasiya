import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { FooterContent } from "./footer-content"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <FooterContent
      collections={collections}
      productCategories={productCategories}
    />
  )
}

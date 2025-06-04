// import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import GiftCategories from "./sections/giftcategories/GiftCategories";
import GiftOcassion from "./sections/giftOcassion/GiftOcassion";
import SeasonalGift from "./sections/seasonalGift/SeasonalGift";
import Services from "./sections/servicesPage/Services";

import Form from "./sections/form/Form";
import FAQ from "./sections/faq/FAQ";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <GiftCategories />
      <GiftOcassion />
      <SeasonalGift />
      <Services />
      {/* <WhyCorporate /> */}
      <Form />
      <FAQ />
    </>
  );
}

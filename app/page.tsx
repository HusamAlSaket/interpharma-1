import About from "./components/About";
import ContactUs from "./components/ContanctUs";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import TestingServicesSection from "./components/TestingServices";
import WhatWeOffer from "./components/WhatWeOffer";


export default function Home() {
  return (
   <>

    <Hero />
    <About />
    <Services />
    <Products />
    <ContactUs />
    <WhatWeOffer />
    <TestingServicesSection />
    </>
  );
}

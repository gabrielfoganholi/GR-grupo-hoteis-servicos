import { useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Packages from "../components/Packages";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  const [searchFilters, setSearchFilters] = useState({
    destino: "",
    data: "",
  });

  return (
    <>
      <Header />
      <Hero onSearch={setSearchFilters} />
      <Destinations />
      <Packages searchFilters={searchFilters} />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
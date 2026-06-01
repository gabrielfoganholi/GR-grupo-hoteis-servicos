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
  return (
    <>
      <Header />
      <Hero />
      <Destinations />
      <Packages />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

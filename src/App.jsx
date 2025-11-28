import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import CursorFollower from "./components/CursorFollower";
import ScrollProgress from "./components/ScrollProgress";
import Marquee from "./components/Marquee";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
      <Sidebar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

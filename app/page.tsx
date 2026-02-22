import ProductGallery from "./components/ProductGallery";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Benefits from "./components/Benefits";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGallery />
      <Problem />
      <Solution />
      <Benefits />
      <WhyChoose />
      <Testimonials />
      <HowItWorks />
      <FAQ />
    </>
  );
}
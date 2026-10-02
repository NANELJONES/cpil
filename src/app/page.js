import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import FeaturedPropertiesSection from "./components/FeaturedPropertiesSection";
import OurServices from "./components/OurServices";
import WhyUs from "./components/WhyUs";
import ContactUs from "./components/ContactUs";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="relative h-auto bg-white text-slate-900">
      <div className="w-full font-sans flex flex-col relative">
        <Header />
        <AboutUs />
        <FeaturedPropertiesSection />
        <OurServices />
        <WhyUs />
        <CTA />
        <ContactUs />
      </div>
    </div>
  );
}

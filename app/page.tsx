import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}

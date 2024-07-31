import AboutComponent from "@/components/AboutComponent";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
    </>
  );
}

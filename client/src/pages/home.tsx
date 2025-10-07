import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MinecraftHosting from "@/components/MinecraftHosting";
import VPSHosting from "@/components/VPSHosting";
import Advantages from "@/components/Advantages";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onNavigate={scrollToSection} />
      <Hero onCTAClick={() => scrollToSection("minecraft")} />
      <MinecraftHosting />
      <VPSHosting />
      <Advantages />
      <Footer />
    </div>
  );
}

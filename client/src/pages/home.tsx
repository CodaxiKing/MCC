import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Advantages from "@/components/Advantages";
import Infrastructure from "@/components/Infrastructure";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        <Hero />
        <WaveDivider color="#FFC107" variant="wave1" />
      </div>
      
      <div className="relative">
        <Advantages />
        <WaveDivider color="#00BCD4" variant="wave2" />
      </div>

      <Stats />

      <div className="relative">
        <WaveDivider color="#5C6BC0" variant="wave1" />
      </div>

      <Infrastructure />

      <div className="relative">
        <WaveDivider color="#E91E63" variant="wave2" />
      </div>

      <FAQ />
      
      <div className="relative">
        <WaveDivider color="#1e293b" variant="wave1" />
      </div>
      <Footer />
    </div>
  );
}

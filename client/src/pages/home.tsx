import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        <Hero />
        <WaveDivider color="rgb(126 34 206)" variant="wave1" />
      </div>
      <div className="relative">
        <Advantages />
        <WaveDivider color="#1e293b" variant="wave2" />
      </div>
      <Footer />
    </div>
  );
}

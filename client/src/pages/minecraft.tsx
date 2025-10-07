import Navbar from "@/components/Navbar";
import MinecraftHosting from "@/components/MinecraftHosting";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function MinecraftPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-20 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
        <MinecraftHosting />
        <WaveDivider color="#1e293b" variant="wave3" />
      </div>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import VPSHosting from "@/components/VPSHosting";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function VPSPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <VPSHosting />
        <WaveDivider color="#1e293b" variant="wave2" />
      </div>
      <Footer />
    </div>
  );
}

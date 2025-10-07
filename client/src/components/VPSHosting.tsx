import PricingCard, { type PricingFeature } from "./PricingCard";
import { Cpu, HardDrive, Network, Server, Shield } from "lucide-react";

export default function VPSHosting() {
  const plans = [
    {
      planName: "VPS Lapis",
      price: "R$ 39,90",
      features: [
        { text: "2 vCores", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "2GB RAM", icon: <Server className="w-3 h-3 text-primary" /> },
        { text: "80GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Tráfego Ilimitado", icon: <Network className="w-3 h-3 text-primary" /> },
        { text: "Acesso Root Completo", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
    {
      planName: "VPS Redstone",
      price: "R$ 69,90",
      features: [
        { text: "4 vCores", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "4GB RAM", icon: <Server className="w-3 h-3 text-primary" /> },
        { text: "160GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Tráfego Ilimitado", icon: <Network className="w-3 h-3 text-primary" /> },
        { text: "Acesso Root Completo", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: true,
    },
    {
      planName: "VPS Diamond",
      price: "R$ 119,90",
      features: [
        { text: "8 vCores", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "8GB RAM", icon: <Server className="w-3 h-3 text-primary" /> },
        { text: "320GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Tráfego Ilimitado", icon: <Network className="w-3 h-3 text-primary" /> },
        { text: "Acesso Root Completo", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
  ];

  return (
    <section id="vps" className="py-24 bg-blue-600 relative overflow-hidden" data-testid="section-vps">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-8 text-white"
            data-testid="text-vps-title"
          >
            Poder e Flexibilidade
            <br />
            <span className="text-white/90">com Nossos VPS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              onSelect={() => console.log(`${plan.planName} selected`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import PricingCard, { type PricingFeature } from "./PricingCard";
import { Cpu, HardDrive, Users, Zap, Shield } from "lucide-react";

export default function MinecraftHosting() {
  const plans = [
    {
      planName: "Plano Creeper",
      price: "R$ 19,90",
      features: [
        { text: "2GB DDR5 RAM", icon: <Zap className="w-3 h-3 text-primary" /> },
        { text: "Slots Ilimitados", icon: <Users className="w-3 h-3 text-primary" /> },
        { text: "CPU Ryzen 9", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "30GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Inclusa", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
    {
      planName: "Plano Ender",
      price: "R$ 29,90",
      features: [
        { text: "4GB DDR5 RAM", icon: <Zap className="w-3 h-3 text-primary" /> },
        { text: "Slots Ilimitados", icon: <Users className="w-3 h-3 text-primary" /> },
        { text: "CPU Ryzen 9", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "50GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Inclusa", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: true,
    },
    {
      planName: "Plano Dragon",
      price: "R$ 49,90",
      features: [
        { text: "8GB DDR5 RAM", icon: <Zap className="w-3 h-3 text-primary" /> },
        { text: "Slots Ilimitados", icon: <Users className="w-3 h-3 text-primary" /> },
        { text: "CPU Ryzen 9", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "100GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Inclusa", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
  ];

  return (
    <section id="minecraft" className="py-24 bg-[#FFC107] relative overflow-hidden" data-testid="section-minecraft">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-8 text-black"
            data-testid="text-minecraft-title"
          >
            Hospedagem Minecraft
            <br />
            <span className="text-gray-800">Feita Para Vencer</span>
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

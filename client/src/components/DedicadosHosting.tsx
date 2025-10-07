import { useState } from "react";
import PricingCard, { type PricingFeature } from "./PricingCard";
import { Cpu, HardDrive, Network, Server, Shield, Zap, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DedicadosHosting() {
  const [location, setLocation] = useState("brasil");
  const [period, setPeriod] = useState("mensal");

  const plans = [
    {
      planName: "Dedicado Bronze",
      price: "R$ 299,90",
      features: [
        { text: "Intel Xeon E3-1230", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "16GB DDR4 RAM", icon: <Server className="w-3 h-3 text-primary" /> },
        { text: "500GB SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Tráfego Ilimitado", icon: <Network className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Avançada", icon: <Shield className="w-3 h-3 text-primary" /> },
        { text: "Acesso Root Completo", icon: <Zap className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
    {
      planName: "Dedicado Prata",
      price: "R$ 499,90",
      features: [
        { text: "Intel Xeon E5-2670", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "32GB DDR4 RAM", icon: <Server className="w-3 h-3 text-primary" /> },
        { text: "1TB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Tráfego Ilimitado", icon: <Network className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Avançada", icon: <Shield className="w-3 h-3 text-primary" /> },
        { text: "Acesso Root Completo", icon: <Zap className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
    {
      planName: "Dedicado Ouro",
      price: "R$ 799,90",
      features: [
        { text: "AMD EPYC 7402P", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "64GB DDR4 RAM", icon: <Server className="w-3 h-3 text-primary" /> },
        { text: "2TB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Tráfego Ilimitado", icon: <Network className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Avançada", icon: <Shield className="w-3 h-3 text-primary" /> },
        { text: "Acesso Root Completo", icon: <Zap className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: true,
    },
    {
      planName: "Dedicado Platina",
      price: "R$ 1.299,90",
      features: [
        { text: "AMD EPYC 7763", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "128GB DDR4 RAM", icon: <Server className="w-3 h-3 text-primary" /> },
        { text: "4TB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Tráfego Ilimitado", icon: <Network className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Avançada", icon: <Shield className="w-3 h-3 text-primary" /> },
        { text: "Acesso Root Completo", icon: <Zap className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
  ];

  const getPeriodLabel = () => {
    switch (period) {
      case "trimestral":
        return "/3 meses";
      case "semestral":
        return "/6 meses";
      default:
        return "/mês";
    }
  };

  return (
    <section id="dedicados" className="py-24 bg-orange-600 relative overflow-hidden" data-testid="section-dedicados">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-8 text-white"
            data-testid="text-dedicados-title"
          >
            Máxima Performance
            <br />
            <span className="text-white/90">com Servidores Dedicados</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border-2 border-white/20">
            <MapPin className="w-5 h-5 text-white" />
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-[200px] bg-transparent border-none text-white font-bold focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brasil">🇧🇷 Brasil</SelectItem>
                <SelectItem value="eua">🇺🇸 Estados Unidos</SelectItem>
                <SelectItem value="europa">🇪🇺 Europa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 bg-white/10 backdrop-blur-md px-2 py-2 rounded-xl border-2 border-white/20">
            <button
              onClick={() => setPeriod("mensal")}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                period === "mensal"
                  ? "bg-white text-orange-600 shadow-lg"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setPeriod("trimestral")}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                period === "trimestral"
                  ? "bg-white text-orange-600 shadow-lg"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Trimestral
            </button>
            <button
              onClick={() => setPeriod("semestral")}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                period === "semestral"
                  ? "bg-white text-orange-600 shadow-lg"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Semestral
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              periodLabel={getPeriodLabel()}
              onSelect={() => console.log(`${plan.planName} selected - ${location} - ${period}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

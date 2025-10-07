import PricingCard from "../PricingCard";
import { Cpu, HardDrive, Users, Zap } from "lucide-react";

export default function PricingCardExample() {
  const features = [
    { text: "4GB DDR5 RAM", icon: <Zap className="w-3 h-3 text-primary" /> },
    { text: "Slots Ilimitados", icon: <Users className="w-3 h-3 text-primary" /> },
    { text: "CPU Ryzen 9", icon: <Cpu className="w-3 h-3 text-primary" /> },
    { text: "50GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
  ];

  return (
    <div className="p-8 bg-background">
      <PricingCard
        planName="Plano Ender"
        price="R$ 29,90"
        features={features}
        featured={true}
        onSelect={() => console.log("Plano Ender selected")}
      />
    </div>
  );
}

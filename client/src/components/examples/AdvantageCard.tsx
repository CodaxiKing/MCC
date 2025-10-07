import AdvantageCard from "../AdvantageCard";
import { Cpu } from "lucide-react";

export default function AdvantageCardExample() {
  return (
    <div className="p-8 bg-background">
      <AdvantageCard
        icon={<Cpu className="w-8 h-8" />}
        title="Hardware de Ponta"
        description="Utilizamos apenas processadores Ryzen 9 e armazenamento NVMe para garantir a menor latência."
      />
    </div>
  );
}

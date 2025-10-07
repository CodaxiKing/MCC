import AdvantageCard from "./AdvantageCard";
import { Cpu, Shield, Headphones, Zap } from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hardware de Ponta",
      description:
        "Utilizamos apenas processadores Ryzen 9 e armazenamento NVMe para garantir a menor latência.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proteção DDoS Avançada",
      description:
        "Sistema de proteção contra ataques DDoS de última geração mantém seu servidor sempre online.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte Técnico 24/7",
      description:
        "Equipe especializada disponível 24 horas por dia, 7 dias por semana para ajudar você.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ativação Imediata",
      description:
        "Seu servidor é ativado automaticamente após a confirmação do pagamento. Comece a jogar agora!",
    },
  ];

  return (
    <section id="advantages" className="py-24 bg-[#FFC107] relative overflow-hidden" data-testid="section-advantages">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-8 text-gray-900"
            data-testid="text-advantages-title"
          >
            Por que escolher a
            <br />
            <span className="text-white">MCC Hosting?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
}

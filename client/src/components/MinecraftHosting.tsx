import PricingCard, { type PricingFeature } from "./PricingCard";
import { Cpu, HardDrive, Users, Zap, Shield, MapPin, ChevronDown, Server, Gauge, Lock, Boxes, Pickaxe } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveDivider from "./WaveDivider";
import { useState } from "react";

export default function MinecraftHosting() {
  const [selectedLocation, setSelectedLocation] = useState("sao-paulo");
  const [selectedPeriod, setSelectedPeriod] = useState<"mensal" | "trimestral" | "semestral">("mensal");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPriceMultiplier = () => {
    switch (selectedPeriod) {
      case "trimestral": return 0.9; // 10% desconto
      case "semestral": return 0.85; // 15% desconto
      default: return 1;
    }
  };

  const calculatePrice = (basePrice: number) => {
    const multiplier = getPriceMultiplier();
    const months = selectedPeriod === "trimestral" ? 3 : selectedPeriod === "semestral" ? 6 : 1;
    return (basePrice * multiplier * months).toFixed(2);
  };

  const getPeriodLabel = () => {
    switch (selectedPeriod) {
      case "trimestral": return "/3 meses";
      case "semestral": return "/6 meses";
      default: return "/mês";
    }
  };

  const getDiscount = () => {
    switch (selectedPeriod) {
      case "trimestral": return "10% OFF";
      case "semestral": return "15% OFF";
      default: return null;
    }
  };

  const basePlans = [
    {
      planName: "Plano Basic",
      basePrice: 19.90,
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
      planName: "Plano Pro",
      basePrice: 29.90,
      features: [
        { text: "4GB DDR5 RAM", icon: <Zap className="w-3 h-3 text-primary" /> },
        { text: "Slots Ilimitados", icon: <Users className="w-3 h-3 text-primary" /> },
        { text: "CPU Ryzen 9", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "50GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Inclusa", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
    {
      planName: "Plano Master",
      basePrice: 49.90,
      features: [
        { text: "8GB DDR5 RAM", icon: <Zap className="w-3 h-3 text-primary" /> },
        { text: "Slots Ilimitados", icon: <Users className="w-3 h-3 text-primary" /> },
        { text: "CPU Ryzen 9", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "100GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Inclusa", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: true,
    },
    {
      planName: "Plano Grand",
      basePrice: 89.90,
      features: [
        { text: "16GB DDR5 RAM", icon: <Zap className="w-3 h-3 text-primary" /> },
        { text: "Slots Ilimitados", icon: <Users className="w-3 h-3 text-primary" /> },
        { text: "CPU Ryzen 9", icon: <Cpu className="w-3 h-3 text-primary" /> },
        { text: "200GB NVMe SSD", icon: <HardDrive className="w-3 h-3 text-primary" /> },
        { text: "Proteção DDoS Inclusa", icon: <Shield className="w-3 h-3 text-primary" /> },
      ] as PricingFeature[],
      featured: false,
    },
  ];

  const plans = basePlans.map(plan => ({
    ...plan,
    price: `R$ ${calculatePrice(plan.basePrice)}`,
  }));

  const faqs = [
    {
      question: "Qual é o melhor plano para começar?",
      answer: "Para iniciantes, recomendamos o Plano Basic com 2GB RAM, ideal para até 20 jogadores simultâneos com mods leves."
    },
    {
      question: "Posso fazer upgrade do meu plano depois?",
      answer: "Sim! Você pode fazer upgrade a qualquer momento sem perder seus dados. O processo é instantâneo e sem complicações."
    },
    {
      question: "Vocês oferecem backup automático?",
      answer: "Sim, todos os planos incluem backup automático diário com retenção de 7 dias. Você também pode criar backups manuais quando quiser."
    },
    {
      question: "Posso instalar mods e plugins?",
      answer: "Com certeza! Oferecemos instalação com 1 clique para os principais mods e plugins. Você também pode fazer upload de arquivos personalizados."
    }
  ];

  const advantages = [
    {
      icon: <Server className="w-10 h-10" />,
      title: "Hardware Premium",
      description: "Processadores Ryzen 9 de última geração e armazenamento NVMe ultra-rápido para performance máxima"
    },
    {
      icon: <Gauge className="w-10 h-10" />,
      title: "Ativação Instantânea",
      description: "Seu servidor Minecraft fica pronto em menos de 60 segundos após a confirmação do pagamento"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Proteção DDoS",
      description: "Proteção avançada contra ataques DDoS incluída em todos os planos sem custo adicional"
    },
    {
      icon: <Boxes className="w-10 h-10" />,
      title: "Mods & Plugins",
      description: "Instalação fácil de mods e plugins com suporte para Forge, Fabric, Spigot e Paper"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Backup Automático",
      description: "Backups diários automáticos com retenção de 7 dias para total segurança dos seus dados"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Suporte 24/7",
      description: "Equipe especializada em Minecraft disponível todos os dias para ajudar você"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section - Minecraft Theme */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-green-800 via-emerald-700 to-teal-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px),
                             repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Pickaxe className="w-16 h-16 text-yellow-400 mr-4 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-black uppercase text-white drop-shadow-2xl">
              Hospedagem Minecraft
            </h1>
            <Pickaxe className="w-16 h-16 text-yellow-400 ml-4 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          
          <p className="text-2xl md:text-3xl text-green-100 font-bold mb-4">
            Servidores Otimizados Para Sua Aventura
          </p>
          
          <p className="text-lg md:text-xl text-green-50/90 max-w-2xl mx-auto mb-10">
            Hardware de ponta, proteção DDoS incluída e suporte especializado 24/7
          </p>

          <Button
            size="lg"
            onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-500 text-white font-black text-xl px-10 py-7 h-auto shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-4 border-green-700"
          >
            VER PLANOS
          </Button>
        </div>
        <WaveDivider color="#f8fafc" variant="wave1" />
      </section>

      {/* Location Selection */}
      <section className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-slate-900 mb-3">Escolha Sua Localização</h3>
            <p className="text-lg text-slate-600">Selecione o datacenter mais próximo para menor latência</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setSelectedLocation("sao-paulo")}
              className={`group px-8 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 ${
                selectedLocation === "sao-paulo"
                  ? "bg-green-600 text-white shadow-xl shadow-green-600/40"
                  : "bg-white text-slate-700 hover:bg-slate-100 border-3 border-slate-200 shadow-lg"
              }`}
            >
              <MapPin className="w-6 h-6 inline mr-2 -mt-1" />
              <span className="text-lg">São Paulo, Brasil</span>
              {selectedLocation === "sao-paulo" && (
                <span className="ml-3 text-sm bg-green-500 px-3 py-1 rounded-full">~15ms</span>
              )}
            </button>
            <button
              onClick={() => setSelectedLocation("miami")}
              className={`group px-8 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 ${
                selectedLocation === "miami"
                  ? "bg-green-600 text-white shadow-xl shadow-green-600/40"
                  : "bg-white text-slate-700 hover:bg-slate-100 border-3 border-slate-200 shadow-lg"
              }`}
            >
              <MapPin className="w-6 h-6 inline mr-2 -mt-1" />
              <span className="text-lg">Miami, EUA</span>
              {selectedLocation === "miami" && (
                <span className="ml-3 text-sm bg-green-500 px-3 py-1 rounded-full">~120ms</span>
              )}
            </button>
          </div>
        </div>
        <WaveDivider color="#293548" variant="wave2" />
      </section>

      {/* Plans Section */}
      <section id="plans-section" className="relative py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black uppercase mb-4 text-white">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-slate-300 mb-8">Performance premium para todos os tamanhos de servidor</p>
            
            {selectedLocation === "sao-paulo" && (
              <>
                {/* Period Selection */}
                <div className="flex justify-center gap-4 mb-8">
                  <button
                    onClick={() => setSelectedPeriod("mensal")}
                    className={`px-8 py-3 rounded-xl font-bold transition-all ${
                      selectedPeriod === "mensal"
                        ? "bg-green-600 text-white shadow-lg scale-105"
                        : "bg-slate-600 text-slate-200 hover:bg-slate-500"
                    }`}
                  >
                    Mensal
                  </button>
                  <button
                    onClick={() => setSelectedPeriod("trimestral")}
                    className={`relative px-8 py-3 rounded-xl font-bold transition-all ${
                      selectedPeriod === "trimestral"
                        ? "bg-green-600 text-white shadow-lg scale-105"
                        : "bg-slate-600 text-slate-200 hover:bg-slate-500"
                    }`}
                  >
                    Trimestral
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-slate-900 text-xs font-black px-2 py-1 rounded-full">10% OFF</span>
                  </button>
                  <button
                    onClick={() => setSelectedPeriod("semestral")}
                    className={`relative px-8 py-3 rounded-xl font-bold transition-all ${
                      selectedPeriod === "semestral"
                        ? "bg-green-600 text-white shadow-lg scale-105"
                        : "bg-slate-600 text-slate-200 hover:bg-slate-500"
                    }`}
                  >
                    Semestral
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-slate-900 text-xs font-black px-2 py-1 rounded-full">15% OFF</span>
                  </button>
                </div>
              </>
            )}
          </div>

          {selectedLocation === "miami" ? (
            <div className="text-center py-20">
              <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-12 py-6 rounded-2xl shadow-2xl border-4 border-yellow-600">
                <h3 className="text-4xl font-black uppercase mb-2">🚀 Em Breve</h3>
                <p className="text-xl font-bold">Servidores em Miami chegarão em breve!</p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                {plans.map((plan, index) => (
                  <PricingCard
                    key={index}
                    {...plan}
                    periodLabel={getPeriodLabel()}
                    onSelect={() => console.log(`${plan.planName} selected`)}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-slate-300 text-lg">
                  💎 Todos os planos incluem: Proteção DDoS, Backup Automático, Suporte 24/7 e Painel de Controle
                </p>
              </div>
            </>
          )}

          <div className="text-center mt-8">
            <p className="text-slate-200 text-lg font-semibold">
              💬 Quer contratar um plano Custom, fale com a gente pelo chat
            </p>
          </div>
        </div>
        <WaveDivider color="#ffffff" variant="wave3" />
      </section>

      {/* Advantages Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase mb-4 text-slate-900">
              Por Que Nos Escolher?
            </h2>
            <p className="text-xl text-slate-600">Recursos premium para a melhor experiência Minecraft</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{advantage.title}</h3>
                <p className="text-slate-700 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
        <WaveDivider color="#f8fafc" variant="wave1" />
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black uppercase mb-4 text-slate-900">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-slate-600">Tire suas dúvidas sobre hospedagem Minecraft</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-green-400 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-5 bg-white hover:bg-slate-50 flex items-center justify-between transition-colors"
                >
                  <span className="font-bold text-left text-slate-900 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-green-600 transition-transform flex-shrink-0 ml-4 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 py-5 bg-green-50 border-t-2 border-green-100">
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <WaveDivider color="#059669" variant="wave2" />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-700 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px),
                             repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Boxes className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-black uppercase mb-6 text-white">
            Pronto Para Aventurar?
          </h2>
          <p className="text-2xl text-green-50 mb-10 leading-relaxed">
            Crie seu servidor Minecraft agora e comece a jogar em menos de 60 segundos!
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-2xl px-14 py-8 h-auto shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 border-4 border-yellow-600"
          >
            CRIAR SERVIDOR AGORA
          </Button>
        </div>
      </section>
    </div>
  );
}

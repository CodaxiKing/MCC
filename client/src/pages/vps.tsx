import Navbar from "@/components/Navbar";
import VPSHosting from "@/components/VPSHosting";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import AdvantageCard from "@/components/AdvantageCard";
import { Settings, Shield, Zap, HardDrive } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Server, Clock, Wrench } from "lucide-react";

export default function VPSPage() {
  const advantages = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Controle Total",
      description:
        "Acesso root completo e liberdade para instalar qualquer aplicação ou sistema operacional.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Recursos Garantidos",
      description:
        "CPU, RAM e armazenamento dedicados exclusivamente para você, sem compartilhamento.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Alto Desempenho",
      description:
        "Processadores de última geração e armazenamento NVMe SSD para máxima velocidade.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Escalabilidade Fácil",
      description:
        "Faça upgrade dos recursos do seu VPS conforme seu projeto cresce, sem complicação.",
    },
  ];

  const faqs = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "O que é um VPS?",
      answer: "VPS (Virtual Private Server) é um servidor virtual que simula um servidor dedicado dentro de um servidor físico. Você tem controle total sobre recursos garantidos como CPU, RAM e armazenamento, com a flexibilidade de escolher seu sistema operacional e configurações.",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      question: "Posso instalar qualquer aplicação no VPS?",
      answer: "Sim! Com acesso root completo, você tem liberdade total para instalar qualquer aplicação, framework ou sistema operacional compatível. Desde servidores web, bancos de dados, até aplicações personalizadas.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      question: "Qual a diferença entre VPS e hospedagem compartilhada?",
      answer: "Na hospedagem compartilhada, você divide recursos com outros usuários. No VPS, você tem recursos garantidos (CPU, RAM, SSD) exclusivos para você, além de controle total do sistema operacional e configurações.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "Posso fazer upgrade do meu plano VPS?",
      answer: "Sim! Você pode fazer upgrade a qualquer momento conforme seu projeto cresce. Aumentamos os recursos do seu VPS com mínimo tempo de inatividade.",
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      question: "Preciso gerenciar o servidor sozinho?",
      answer: "Você tem total autonomia para gerenciar seu VPS, mas nossa equipe de suporte 24/7 está sempre disponível para auxiliar em configurações, migrações e resolução de problemas técnicos.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <VPSHosting />
        <WaveDivider color="#00BCD4" variant="wave2" />
      </div>

      <section className="py-24 bg-[#00BCD4] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-8 text-gray-900">
              Por que escolher
              <br />
              <span className="text-white">Nossos VPS?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <AdvantageCard key={index} {...advantage} />
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <WaveDivider color="#0891b2" variant="wave1" />
      </div>

      <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-white/90 text-lg">
              Tire suas dúvidas sobre nossos servidores VPS.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-white/20 rounded-xl bg-white/10 backdrop-blur-md overflow-hidden hover:border-cyan-400/60 hover:bg-white/15 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-blue-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {faq.icon}
                    </div>
                    <span className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-14 text-white/90 leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="relative">
        <WaveDivider color="#1e293b" variant="wave2" />
      </div>
      <Footer />
    </div>
  );
}

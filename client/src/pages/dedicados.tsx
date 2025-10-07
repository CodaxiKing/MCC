import Navbar from "@/components/Navbar";
import DedicadosHosting from "@/components/DedicadosHosting";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import AdvantageCard from "@/components/AdvantageCard";
import { Cpu, Shield, Gauge, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Server, Clock, Wrench, Zap } from "lucide-react";

export default function DedicadosPage() {
  const advantages = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "100% Dedicado",
      description:
        "Servidor físico completo exclusivo para você. Todos os recursos são seus, sem compartilhamento.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Máxima",
      description:
        "Processadores Intel Xeon e AMD EPYC de última geração para o máximo desempenho.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Segurança Total",
      description:
        "Isolamento completo e proteção DDoS avançada para garantir a segurança dos seus dados.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uptime Garantido",
      description:
        "Infraestrutura redundante e monitoramento 24/7 garantem disponibilidade máxima.",
    },
  ];

  const faqs = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "O que é um servidor dedicado?",
      answer: "Um servidor dedicado é um servidor físico completo alocado exclusivamente para você. Diferente de VPS ou hospedagem compartilhada, todos os recursos (CPU, RAM, armazenamento, largura de banda) são 100% seus, proporcionando máxima performance e controle.",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      question: "Qual a diferença entre Dedicado e VPS?",
      answer: "No VPS, você tem uma porção virtualizada de um servidor físico. No Dedicado, você tem o servidor físico inteiro para você, com todos os recursos de hardware dedicados exclusivamente ao seu projeto, oferecendo performance e poder incomparáveis.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      question: "Para que tipo de projeto é recomendado?",
      answer: "Servidores dedicados são ideais para aplicações de alto tráfego, e-commerce de grande porte, bancos de dados robustos, servidores de jogos com muitos jogadores simultâneos, e qualquer projeto que exija máxima performance e recursos.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "Quanto tempo leva para ativar?",
      answer: "Servidores dedicados são provisionados e configurados em até 24-48 horas após a confirmação do pagamento. Garantimos uma configuração cuidadosa e testes completos antes da entrega.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      question: "Vocês oferecem gerenciamento do servidor?",
      answer: "Sim! Além do acesso root completo para gerenciamento próprio, oferecemos serviços de gerenciamento opcional onde nossa equipe cuida de atualizações, segurança, backups e monitoramento para você.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative pt-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <DedicadosHosting />
        <WaveDivider color="#f97316" variant="wave2" />
      </div>

      <section className="py-24 bg-[#f97316] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-8 text-gray-900">
              Por que escolher
              <br />
              <span className="text-white">Nossos Dedicados?</span>
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
        <WaveDivider color="#ea580c" variant="wave1" />
      </div>

      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-rose-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-white/90 text-lg">
              Tire suas dúvidas sobre nossos servidores dedicados.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-white/20 rounded-xl bg-white/10 backdrop-blur-md overflow-hidden hover:border-orange-400/60 hover:bg-white/15 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-orange-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {faq.icon}
                    </div>
                    <span className="text-white font-bold text-lg group-hover:text-orange-300 transition-colors duration-300">
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

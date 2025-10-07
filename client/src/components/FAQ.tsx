import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Shield, Server, Clock, Wrench } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "O que é uma hospedagem de jogos?",
      answer: "Hospedagem de jogos é um serviço especializado que fornece servidores otimizados para rodar jogos multiplayer online. Diferente de uma hospedagem web comum, nossos servidores são configurados especificamente para garantir baixa latência, alto desempenho e proteção contra ataques, proporcionando a melhor experiência para os jogadores.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      question: "Meu servidor é protegido contra ataques DDoS?",
      answer: "Sim! Todos os nossos planos incluem proteção DDoS avançada com Cloudflare Magic Transit 100% Inline. Isso significa que seu servidor está sempre protegido contra ataques maliciosos, garantindo que seus jogadores tenham uma experiência ininterrupta e segura.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      question: "Qual a diferença entre VPS, Dedicado e Hospedagem de Jogos?",
      answer: "Hospedagem de Jogos é otimizada especificamente para jogos com configurações pré-definidas. VPS (Virtual Private Server) oferece mais flexibilidade e controle total do sistema operacional. Servidor Dedicado é um servidor físico completo exclusivo para você, ideal para projetos de grande porte que exigem máximo desempenho e recursos.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "Em quanto tempo meu servidor fica online?",
      answer: "Seu servidor é ativado automaticamente após a confirmação do pagamento! O processo de ativação leva apenas alguns minutos. Você receberá os dados de acesso por email imediatamente e poderá começar a configurar seu servidor na hora.",
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      question: "Preciso de conhecimento técnico para contratar um servidor?",
      answer: "Não necessariamente! Para hospedagem de jogos, oferecemos painéis de controle intuitivos que facilitam a gestão. Para VPS e Dedicados, um conhecimento básico de servidor ajuda, mas nossa equipe de suporte 24/7 está sempre disponível para auxiliar você em qualquer dúvida ou configuração.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-white/90 text-lg">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços de hospedagem de jogos.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-white/20 rounded-xl bg-white/10 backdrop-blur-md overflow-hidden hover:border-yellow-400/60 hover:bg-white/15 transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-pink-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    {faq.icon}
                  </div>
                  <span className="text-white font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300">
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
  );
}

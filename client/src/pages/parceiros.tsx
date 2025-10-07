import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube, Twitch, Users, Sparkles, Trophy, Rocket } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import AdvantageCard from "@/components/AdvantageCard";

export default function ParceirosPage() {
  const partnerLogos = Array(20).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Parceiro ${i + 1}`,
  }));

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Infraestrutura Premium",
      description: "Servidores de alta performance para seu conteúdo rodar sem travamentos.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Suporte Dedicado",
      description: "Equipe especializada 24/7 para ajudar você a crescer na plataforma.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Benefícios Exclusivos",
      description: "Descontos especiais e recursos premium para nossos parceiros.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Ativa",
      description: "Faça networking com outros criadores e compartilhe experiências.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-white">
              Nossos <span className="text-[#FFC107]">Parceiros</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              É um criador de conteúdo e gostaria de criar algo único? Nosso programa de parcerias é perfeito para você!
            </p>
            <Button 
              size="lg"
              className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-black text-lg px-12 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              SEJA UM PARCEIRO
            </Button>
          </div>

          {/* Carrossel de Parceiros */}
          <div className="relative overflow-hidden">
            <style>{`
              @keyframes scrollRight {
                0% {
                  transform: translateX(-50%);
                }
                100% {
                  transform: translateX(0%);
                }
              }
              .animate-scroll-right {
                animation: scrollRight 20s linear infinite;
              }
              .animate-scroll-right:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex gap-4 animate-scroll-right">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 w-24 h-24 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center border-2 border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <WaveDivider color="#E91E63" variant="wave1" />
      </div>

      {/* Benefícios Section */}
      <section className="py-24 bg-[#E91E63] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-8 text-gray-900">
              Por que ser
              <br />
              <span className="text-white">Nosso Parceiro?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AdvantageCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <WaveDivider color="#9333ea" variant="wave2" />
      </div>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-8 text-white max-w-4xl mx-auto leading-tight">
              Nossos parceiros somam dezenas de milhões de seguidores nas redes sociais.{" "}
              <span className="text-[#FFC107]">Que tal fazer parte dessa rede?</span>
            </h2>
          </div>

          {/* Plataformas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all cursor-pointer hover:scale-105 border-4 border-transparent hover:border-[#FFC107] bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:rotate-6">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-black text-black uppercase">Youtube</h4>
                <p className="text-gray-600 text-center text-sm">Crie conteúdo épico com nossa infraestrutura</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all cursor-pointer hover:scale-105 border-4 border-transparent hover:border-[#FFC107] bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:rotate-6">
                  <Twitch className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-black text-black uppercase">Twitch</h4>
                <p className="text-gray-600 text-center text-sm">Faça lives sem travamentos ou quedas</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all cursor-pointer hover:scale-105 border-4 border-transparent hover:border-[#FFC107] bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:rotate-6">
                  <SiTiktok className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-black text-black uppercase">TikTok</h4>
                <p className="text-gray-600 text-center text-sm">Hospede seus projetos e aplicações</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="relative">
        <WaveDivider color="#00BCD4" variant="wave1" />
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-[#00BCD4]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-display font-black uppercase mb-6 text-white">
            Está falando por uma <span className="text-[#FFC107]">Empresa?</span>
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Temos planos especiais para empresas e organizações. Entre em contato!
          </p>
          <Button 
            size="lg"
            className="bg-white text-[#00BCD4] hover:bg-gray-100 font-black text-lg px-12 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            FALE COM A GENTE
          </Button>
        </div>
      </section>

      <div className="relative">
        <WaveDivider color="#1e293b" variant="wave2" />
      </div>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube, Twitch } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function ParceirosPage() {
  const partnerLogos = Array(20).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Parceiro ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Carrossel de Parceiros - Topo (para direita) */}
          <div className="relative mb-20 overflow-hidden">
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
                  className="flex-shrink-0 w-24 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Seção Principal */}
          <div className="text-center mb-16 py-12">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-black">
              Nossos <span className="text-[#FFC107]">Parceiros</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              É um criador de conteúdo e gostaria de criar algo único? Nosso programa de parcerias é perfeito para você!
            </p>
            <Button 
              size="lg"
              className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-black text-lg px-12 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              SEJA UM PARCEIRO
            </Button>
          </div>

          {/* Carrossel de Parceiros - Meio (para esquerda) */}
          <div className="relative mb-20 overflow-hidden">
            <style>{`
              @keyframes scrollLeft {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll-left {
                animation: scrollLeft 20s linear infinite;
              }
              .animate-scroll-left:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex gap-4 animate-scroll-left">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={`mid-${index}`}
                  className="flex-shrink-0 w-24 h-24 bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Destaque */}
          <div className="text-center mb-16 py-12">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-8 text-black max-w-4xl mx-auto leading-tight">
              Nossos parceiros somam dezenas de milhões de seguidores nas redes sociais.{" "}
              <span className="text-[#FFC107]">Que tal fazer parte dessa rede?</span>
            </h2>
          </div>

          {/* Como Ajudamos */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase mb-4 text-center text-black">
              Como ajudamos?
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
              Através de nosso serviço e equipe de criação de conteúdo e expertise, ajudamos nossos parceiros a levar seu conteúdo para o próximo nível!
            </p>
            <p className="text-center text-gray-600 mb-8">
              Selecione uma das opções abaixo para dar início ao processo de uma grande parceria:
            </p>

            {/* Botões de Plataformas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 hover:shadow-xl transition-all cursor-pointer hover:scale-105 border-2 hover:border-[#FFC107]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-black">Youtube</h4>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all cursor-pointer hover:scale-105 border-2 hover:border-[#FFC107]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <Twitch className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-black">Twitch</h4>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all cursor-pointer hover:scale-105 border-2 hover:border-[#FFC107]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <SiTiktok className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-black">TikTok</h4>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Empresa */}
          <div className="text-center py-8">
            <p className="text-lg text-gray-700 mb-4">Está falando por uma empresa?</p>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-black hover:bg-black hover:text-white font-bold"
            >
              Fale com a gente aqui
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

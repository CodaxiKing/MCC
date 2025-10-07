import { Button } from "@/components/ui/button";

interface HeroProps {
  onCTAClick?: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase mb-6 leading-tight text-white drop-shadow-2xl"
          data-testid="text-hero-title"
        >
          Performance Lendária
          <br />
          Para o Seu Mundo
        </h1>

        <p
          className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-semibold drop-shadow-lg"
          data-testid="text-hero-subtitle"
        >
          Servidores Minecraft e VPS de alta performance com proteção DDoS de ponta e ativação
          imediata. Crie, jogue e conquiste sem limites.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={onCTAClick}
            className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-black text-lg px-12 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-none"
            data-testid="button-ver-planos"
          >
            VER PLANOS
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-black text-lg px-12 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            data-testid="button-saiba-mais"
          >
            SAIBA MAIS
          </Button>
        </div>
      </div>
    </section>
  );
}

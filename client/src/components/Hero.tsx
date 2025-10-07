import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, Zap, Shield, Server, Cloud, Cpu, Database, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-700"
      data-testid="section-hero"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-purple-900/30 animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating Cards - Lado Esquerdo */}
      <div className="absolute top-[15%] left-[5%] animate-float-slow">
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative bg-gradient-to-br from-purple-500/40 to-purple-700/40 backdrop-blur-md p-6 rounded-3xl border border-purple-400/30 shadow-2xl">
            <Cloud className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute top-[45%] left-[8%] animate-float-medium" style={{ animationDelay: '1s' }}>
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative bg-gradient-to-br from-purple-500/40 to-purple-700/40 backdrop-blur-md p-5 rounded-2xl border border-purple-400/30 shadow-2xl">
            <Database className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute top-[75%] left-[6%] animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative bg-gradient-to-br from-purple-500/40 to-purple-700/40 backdrop-blur-md p-4 rounded-2xl border border-purple-400/30 shadow-2xl">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Floating Cards - Lado Direito */}
      <div className="absolute top-[20%] right-[6%] animate-float-medium" style={{ animationDelay: '0.5s' }}>
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative bg-gradient-to-br from-purple-500/40 to-purple-700/40 backdrop-blur-md p-6 rounded-3xl border border-purple-400/30 shadow-2xl">
            <Server className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute top-[50%] right-[8%] animate-float-slow" style={{ animationDelay: '1.5s' }}>
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative bg-gradient-to-br from-purple-500/40 to-purple-700/40 backdrop-blur-md p-5 rounded-2xl border border-purple-400/30 shadow-2xl">
            <Cpu className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute top-[78%] right-[5%] animate-float-medium" style={{ animationDelay: '0.8s' }}>
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative bg-gradient-to-br from-purple-500/40 to-purple-700/40 backdrop-blur-md p-4 rounded-2xl border border-purple-400/30 shadow-2xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20">
        {/* Badge de destaque */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mt-8 mb-8 animate-bounce-slow">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-white font-bold text-sm md:text-base">
            🎮 Servidores de Alto Desempenho • Proteção Total • Suporte 24/7
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black uppercase mb-8 leading-tight text-white drop-shadow-2xl animate-fade-in"
          data-testid="text-hero-title"
        >
          Performance Lendária
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
            Para o Seu Mundo
          </span>
        </h1>

        <p
          className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed font-semibold drop-shadow-lg"
          data-testid="text-hero-subtitle"
        >
          Servidores Minecraft e VPS de alta performance com proteção DDoS e ativação instantânea.
        </p>

        {/* Features destacados */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold text-sm md:text-base">Ativação Instantânea</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-purple-300" />
            <span className="text-white font-semibold text-sm md:text-base">DDoS Protection</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-white font-semibold text-sm md:text-base">99.9% Uptime</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href="/minecraft">
            <Button
              size="lg"
              className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-black text-lg px-12 py-6 h-auto shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 border-none transform hover:-translate-y-1"
              data-testid="button-ver-planos"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              VER PLANOS
            </Button>
          </Link>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-black text-lg px-12 py-6 h-auto shadow-2xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            data-testid="button-saiba-mais"
            onClick={() => {
              const element = document.getElementById("advantages");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            SAIBA MAIS
          </Button>
        </div>
      </div>
    </section>
  );
}

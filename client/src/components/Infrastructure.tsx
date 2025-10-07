import { Check } from "lucide-react";

export default function Infrastructure() {
  const features = [
    {
      title: "Data center tier III",
      description: "Estamos localizados no Data Center Ascenty, em Osasco - SP",
    },
    {
      title: "Proteção anti-ddos Cloudflare",
      description: "Contamos com a proteção DDoS Cloudflare Magic Transit 100% Inline",
    },
    {
      title: "Uptime",
      description: "Serviços estáveis e com hardware de última geração",
    },
    {
      title: "Flexibilidade",
      description: "Diversos processadores para todo tipo de aplicação",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src="/attached_assets/minecraft-hero.png" 
                alt="Minecraft Hero" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl animate-bounce-slow"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
              <span className="text-white font-semibold text-sm">Infraestrutura premium</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6">
              Servidores de Alta Performance
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Nossa infraestrutura é construída com hardware de última geração, garantindo velocidade e estabilidade para seus jogos e aplicações
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-md bg-yellow-400/90 flex items-center justify-center group-hover:bg-yellow-300 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-indigo-900" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

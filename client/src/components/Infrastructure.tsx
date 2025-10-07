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
    <section className="py-24 bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Server illustration using CSS */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Laptops */}
                <div className="absolute top-0 left-0 w-48 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg transform -rotate-12 shadow-2xl border-4 border-purple-400/30">
                  <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-br from-purple-900 to-black rounded overflow-hidden">
                    <div className="flex flex-col gap-1 p-2">
                      <div className="h-1 bg-cyan-400 w-3/4"></div>
                      <div className="h-1 bg-purple-400 w-1/2"></div>
                      <div className="h-1 bg-pink-400 w-2/3"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-800"></div>
                </div>

                <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg transform rotate-12 shadow-2xl border-4 border-purple-400/30">
                  <div className="absolute top-3 left-3 right-3 h-16 bg-gradient-to-br from-purple-900 to-black rounded overflow-hidden">
                    <div className="flex flex-col gap-1 p-2">
                      <div className="h-1 bg-cyan-400 w-2/3"></div>
                      <div className="h-1 bg-purple-400 w-3/4"></div>
                      <div className="h-1 bg-pink-400 w-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-800"></div>
                </div>

                {/* Central server/processor */}
                <div className="relative mt-24 mx-auto w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900 rounded-3xl transform rotate-45 shadow-2xl">
                    <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center">
                      <div className="text-white text-6xl font-black transform -rotate-45">5G</div>
                    </div>
                  </div>
                  {/* RAM sticks */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-32 bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-lg"></div>
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-32 bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-lg"></div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-32 bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-lg"></div>
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-3 h-32 bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-lg"></div>
                </div>
              </div>
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

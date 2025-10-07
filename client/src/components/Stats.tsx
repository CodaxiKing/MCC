import { Users, Server, Award, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "10.000+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: <Server className="w-8 h-8" />,
      value: "50.000+",
      label: "Servidores Ativos",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "99.9%",
      label: "Uptime Garantido",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "24/7",
      label: "Suporte Dedicado",
    },
  ];

  return (
    <section className="py-20 bg-[#00BCD4] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center transform transition-all duration-500 hover:scale-110"
            >
              <div className="inline-flex p-4 rounded-2xl bg-white/20 text-white mb-4 group-hover:shadow-lg group-hover:shadow-white/50 transition-all duration-500 group-hover:rotate-12">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/90 font-semibold group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Server, Globe, Shield } from "lucide-react";

export default function StatusPage() {
  const services = [
    { name: "Servidores Minecraft", status: "Operacional", icon: Server },
    { name: "Servidores VPS", status: "Operacional", icon: Server },
    { name: "Website", status: "Operacional", icon: Globe },
    { name: "Proteção DDoS", status: "Operacional", icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 min-h-[80vh] bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-black">
              Status da <span className="text-[#FFC107]">Host</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Monitore o status em tempo real de todos os nossos serviços.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6 mb-8 flex items-center gap-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              <div>
                <h2 className="text-2xl font-bold text-green-800">Todos os Sistemas Operacionais</h2>
                <p className="text-green-700">Todos os serviços estão funcionando normalmente.</p>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <Card key={service.name} className="border-2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-8 w-8 text-gray-600" />
                      <div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="font-bold text-green-600">{service.status}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

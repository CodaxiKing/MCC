import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Book, Mail, Phone } from "lucide-react";

export default function AjudaPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 min-h-[80vh] bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-black">
              Central de <span className="text-[#FFC107]">Ajuda</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estamos aqui para ajudá-lo com qualquer dúvida ou problema.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-[#FFC107] transition-all">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-[#FFC107] mb-2" />
                <CardTitle>Chat ao Vivo</CardTitle>
                <CardDescription>
                  Suporte em tempo real 24/7
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#FFC107] transition-all">
              <CardHeader>
                <Book className="h-12 w-12 text-[#FFC107] mb-2" />
                <CardTitle>Base de Conhecimento</CardTitle>
                <CardDescription>
                  Tutoriais e guias completos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#FFC107] transition-all">
              <CardHeader>
                <Mail className="h-12 w-12 text-[#FFC107] mb-2" />
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  suporte@mcchosting.com
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-[#FFC107] transition-all">
              <CardHeader>
                <Phone className="h-12 w-12 text-[#FFC107] mb-2" />
                <CardTitle>Telefone</CardTitle>
                <CardDescription>
                  Suporte técnico especializado
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Server, HelpCircle, FileText } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [servicosOpen, setServicosOpen] = useState(false);
  const [ajudaOpen, setAjudaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <span className="text-2xl font-display font-black tracking-tight px-4 py-2 rounded-md transition-transform hover:scale-105 cursor-pointer" data-testid="logo-button">
              <span className="text-black">
                MCC <span className="text-[#FFC107]">HOSTING</span>
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span
                className={`hover:text-[#FFC107] transition-colors font-bold uppercase text-sm cursor-pointer ${
                  isActive("/") ? "text-[#FFC107]" : "text-black"
                }`}
                data-testid="link-inicio"
              >
                Início
              </span>
            </Link>
            
            <Link href="/minecraft">
              <span
                className={`hover:text-[#FFC107] transition-colors font-bold uppercase text-sm cursor-pointer ${
                  isActive("/minecraft") ? "text-[#FFC107]" : "text-black"
                }`}
                data-testid="link-minecraft"
              >
                Minecraft
              </span>
            </Link>

            <DropdownMenu open={servicosOpen} onOpenChange={setServicosOpen}>
              <DropdownMenuTrigger 
                className="flex items-center gap-1 text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm outline-none px-8 py-8 rounded-md"
                onMouseEnter={() => setServicosOpen(true)}
                onMouseLeave={() => setServicosOpen(false)}
              >
                Serviços <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-white border-2 border-gray-200 shadow-2xl p-3 w-80 -mt-2"
                onMouseEnter={() => setServicosOpen(true)}
                onMouseLeave={() => setServicosOpen(false)}
              >
                <Link href="/vps">
                  <DropdownMenuItem className="cursor-pointer p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all group mb-2 border-2 border-transparent hover:border-purple-200 focus:bg-transparent focus:text-inherit">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Server className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-900 font-black text-base mb-1">VPS</h4>
                        <p className="text-slate-600 text-sm">Servidores virtuais para projetos flexíveis.</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dedicados">
                  <DropdownMenuItem className="cursor-pointer p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all group border-2 border-transparent hover:border-orange-200 focus:bg-transparent focus:text-inherit">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Server className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-900 font-black text-base mb-1">Dedicados</h4>
                        <p className="text-slate-600 text-sm">Servidores dedicados de alta performance.</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/parceiros">
              <span
                className={`hover:text-[#FFC107] transition-colors font-bold uppercase text-sm cursor-pointer ${
                  isActive("/parceiros") ? "text-[#FFC107]" : "text-black"
                }`}
                data-testid="link-parceiros"
              >
                Parceiros
              </span>
            </Link>

            <DropdownMenu open={ajudaOpen} onOpenChange={setAjudaOpen}>
              <DropdownMenuTrigger 
                className="flex items-center gap-1 text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm outline-none px-8 py-8 rounded-md"
                onMouseEnter={() => setAjudaOpen(true)}
                onMouseLeave={() => setAjudaOpen(false)}
              >
                Ajuda <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-white border-2 border-gray-200 shadow-2xl p-3 w-80 -mt-2"
                onMouseEnter={() => setAjudaOpen(true)}
                onMouseLeave={() => setAjudaOpen(false)}
              >
                <Link href="/ajuda">
                  <DropdownMenuItem className="cursor-pointer p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all group mb-2 border-2 border-transparent hover:border-blue-200 focus:bg-transparent focus:text-inherit">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <HelpCircle className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-900 font-black text-base mb-1">Central de Ajuda</h4>
                        <p className="text-slate-600 text-sm">Encontre respostas para suas dúvidas.</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/status">
                  <DropdownMenuItem className="cursor-pointer p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all group border-2 border-transparent hover:border-green-200 focus:bg-transparent focus:text-inherit">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-900 font-black text-base mb-1">Status da Host</h4>
                        <p className="text-slate-600 text-sm">Verifique o status dos serviços.</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link href="/area-cliente">
            <Button
              className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-black uppercase shadow-lg hover:shadow-xl transition-all"
              data-testid="button-client-area"
            >
              Área do Cliente
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

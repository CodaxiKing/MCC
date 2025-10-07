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
                className="flex items-center gap-1 text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm outline-none"
                onMouseEnter={() => setServicosOpen(true)}
                onMouseLeave={() => setServicosOpen(false)}
              >
                Serviços <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/95 backdrop-blur-sm border-gray-800 p-2 w-72"
                onMouseEnter={() => setServicosOpen(true)}
                onMouseLeave={() => setServicosOpen(false)}
              >
                <Link href="/vps">
                  <DropdownMenuItem className="cursor-pointer p-4 rounded-lg hover:bg-white/10 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-base mb-1">VPS</h4>
                        <p className="text-gray-400 text-sm">Servidores virtuais para projetos flexíveis.</p>
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
                className="flex items-center gap-1 text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm outline-none"
                onMouseEnter={() => setAjudaOpen(true)}
                onMouseLeave={() => setAjudaOpen(false)}
              >
                Ajuda <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/95 backdrop-blur-sm border-gray-800 p-2 w-72"
                onMouseEnter={() => setAjudaOpen(true)}
                onMouseLeave={() => setAjudaOpen(false)}
              >
                <Link href="/ajuda">
                  <DropdownMenuItem className="cursor-pointer p-4 rounded-lg hover:bg-white/10 transition-all group mb-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <HelpCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-base mb-1">Central de Ajuda</h4>
                        <p className="text-gray-400 text-sm">Encontre respostas para suas dúvidas.</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
                <Link href="/status">
                  <DropdownMenuItem className="cursor-pointer p-4 rounded-lg hover:bg-white/10 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-base mb-1">Status da Host</h4>
                        <p className="text-gray-400 text-sm">Verifique o status dos serviços.</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button
            className="bg-[#FFC107] hover:bg-[#FFD54F] text-black font-black uppercase shadow-lg hover:shadow-xl transition-all"
            data-testid="button-client-area"
          >
            Área do Cliente
          </Button>
        </div>
      </div>
    </nav>
  );
}

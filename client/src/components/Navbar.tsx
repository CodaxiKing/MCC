import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm outline-none">
                Serviços <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/vps">
                  <DropdownMenuItem className="cursor-pointer">
                    VPS
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

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm outline-none">
                Ajuda <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/ajuda">
                  <DropdownMenuItem className="cursor-pointer">
                    Central de Ajuda
                  </DropdownMenuItem>
                </Link>
                <Link href="/status">
                  <DropdownMenuItem className="cursor-pointer">
                    Status da Host
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

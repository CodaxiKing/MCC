import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-black tracking-tight px-4 py-2 rounded-md transition-transform hover:scale-105"
            data-testid="logo-button"
          >
            <span className="text-black">
              MCC <span className="text-[#FFC107]">HOSTING</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm"
              data-testid="link-inicio"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("minecraft")}
              className="text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm"
              data-testid="link-minecraft"
            >
              Minecraft
            </button>
            <button
              onClick={() => scrollToSection("vps")}
              className="text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm"
              data-testid="link-vps"
            >
              VPS
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="text-black hover:text-[#FFC107] transition-colors font-bold uppercase text-sm"
              data-testid="link-suporte"
            >
              Suporte
            </button>
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

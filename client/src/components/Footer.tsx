import { Github, Twitter, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-display font-black tracking-tight mb-4 text-white">
              MCC <span className="text-[#FFC107]">HOSTING</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Performance lendária para o seu mundo. Hospedagem de servidores com tecnologia de
              ponta e suporte excepcional.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-inicio"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#minecraft"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-minecraft"
                >
                  Hospedagem Minecraft
                </a>
              </li>
              <li>
                <a
                  href="#vps"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-vps"
                >
                  Servidores VPS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#minecraft"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-minecraft-hosting"
                >
                  Minecraft Hosting
                </a>
              </li>
              <li>
                <a
                  href="#vps"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-vps-hosting"
                >
                  VPS Hosting
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-ddos"
                >
                  Proteção DDoS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4 uppercase">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#advantages"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-support"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-contact"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-[#FFC107] transition-colors text-sm"
                  data-testid="footer-link-status"
                >
                  Status dos Servidores
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm" data-testid="text-copyright">
              © 2025 MCC Hosting. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC107] transition-colors"
                aria-label="Discord"
                data-testid="link-discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC107] transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC107] transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC107] transition-colors"
                aria-label="GitHub"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

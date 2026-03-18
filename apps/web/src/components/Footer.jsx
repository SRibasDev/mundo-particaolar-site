import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

function Footer() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾');

  return (
    <footer className="bg-accent border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              MUNDO PARTICÃOLAR
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Onde seu melhor amigo vive dias tão felizes quanto em casa. Cuidado, carinho e segurança para o seu pet.
            </p>
          </div>

          <div>
            <span className="text-base font-semibold text-foreground">Links rápidos</span>
            <nav className="mt-4 flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Serviços
              </Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Sobre
              </Link>
              <Link to="/estrutura" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Estrutura
              </Link>
              <Link to="/galeria" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Galeria
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-base font-semibold text-foreground">Contato</span>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </a>
              <a
                href="mailto:contato@mundoparticaolar.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>contato@mundoparticaolar.com.br</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Mundo PartiCãoLar. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
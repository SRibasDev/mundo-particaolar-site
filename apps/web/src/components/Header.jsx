import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/estrutura', label: 'Estrutura' },
    { path: '/galeria', label: 'Galeria' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Substituída aqui */}
          <Link to="/" className="flex items-center">
            <img 
              src='/public/assets/images/logos/logo.png' 
              alt="Logo Mundo PartiCãoLar" 
              className="h-28 w-auto object-contain transition-transform hover:scale-105"   
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1 scale-105'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-6 mt-8">
                {/* Logo também no menu mobile (opcional) */}
                <img src='/public/assets/images/logos/logo.png' alt="Logo" className="h-12 w-auto object-contain mb-4" />
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-primary font-semibold scale-105'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
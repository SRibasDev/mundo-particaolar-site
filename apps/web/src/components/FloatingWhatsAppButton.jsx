import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

function FloatingWhatsAppButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group animate-slow-pulse ${isScrolled ? 'scale-110' : 'scale-100'}`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
    </a>
  );
}

export default FloatingWhatsAppButton;
import React from 'react';
import { Helmet } from 'react-helmet';
import { Home, Sun, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

function ServicesPage() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const services = [
    {
      icon: Home,
      title: 'Hotelzinho',
      description: 'Hospedagem completa para o seu cão com todo conforto e segurança. Ideal para viagens, compromissos ou quando você precisa se ausentar.',
      benefits: [
        'Acomodações confortáveis e higienizadas',
        'Monitoramento 24 horas por dia',
        'Alimentação balanceada (ou a dieta do seu pet)',
        'Recreação supervisionada diária',
        'Relatórios com fotos e vídeos',
        'Administração de medicamentos se necessário'
      ]
    },
    {
      icon: Sun,
      title: 'Creche / Daycare',
      description: 'Seu cão passa o dia brincando, socializando e gastando energia de forma saudável enquanto você trabalha ou resolve seus compromissos.',
      benefits: [
        'Socialização com outros cães',
        'Atividades recreativas supervisionadas',
        'Ambiente seguro e estimulante',
        'Horários flexíveis (meio período ou dia inteiro)',
        'Atualizações durante o dia',
        'Cães voltam cansados e felizes'
      ]
    },
    {
      icon: Sparkles,
      title: 'Banho e Tosa',
      description: 'Serviço completo de higiene e estética para deixar seu pet limpinho, cheiroso e ainda mais bonito.',
      benefits: [
        'Banho com produtos de qualidade',
        'Tosa higiênica ou estética',
        'Corte de unhas e limpeza de ouvidos',
        'Hidratação e perfumação',
        'Profissionais experientes',
        'Agendamento facilitado'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nossos Serviços - Mundo PartiCãoLar</title>
        <meta name="description" content="Conheça nossos serviços: Hotelzinho, Creche/Daycare e Banho e Tosa. Cuidado completo para o seu melhor amigo." />
      </Helmet>

      <Header />
      <FloatingWhatsAppButton />

      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossos serviços
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Oferecemos cuidado completo para o seu pet com profissionalismo, carinho e dedicação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <div className="order-2 md:order-1">
                <ServiceCard {...services[0]} />
              </div>
              <div className="order-1 md:order-2 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1598126398754-57276a6c5fd8"
                  alt="Cães felizes brincando em área de recreação supervisionada"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1679673670335-aa7f8c6e26bf"
                  alt="Cuidadores profissionais interagindo com cães durante o daycare"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <ServiceCard {...services[1]} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <ServiceCard {...services[2]} />
              </div>
              <div className="order-1 md:order-2 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1699309366611-c4cf7748dbec"
                  alt="Cão limpo e feliz após banho e tosa profissional"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Não sabe qual é o ideal?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Fale com a gente no WhatsApp e vamos te ajudar a escolher o melhor serviço para o seu pet
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-98"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar com nossa equipe
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
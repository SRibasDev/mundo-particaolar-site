import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TestimonialCard from '@/components/TestimonialCard';

function HomePage() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const carouselImages = [
    {
      url: '/assets/images/carousel/brincadeira-piscina.png',
      alt: 'Dogs na piscina'
    },
    {
      url: '/assets/images/carousel/dogs-sentados.png',
      alt: 'Dogs sentados em um ambiente caótico'
    },
    {
      url: '/assets/images/carousel/dinamica-frutas.png',
      alt: 'Dogs brincando na piscina'
    }
  ];

  const testimonials = [
    {
      dogPhoto: '/assets/images/testimonials/lola.png',
      testimonialText: 'Texto do depoimento aqui...',
      ownerName: 'Fulana',
      dogName: 'Lola',
      rating: 5
    },
    {
      dogPhoto: '/assets/images/testimonials/surf.png',
      testimonialText: 'Texto do depoimento aqui...',
      ownerName: 'Cicrano',
      dogName: 'Surf',
      rating: 5
    },
    {
      dogPhoto: '/assets/images/testimonials/bartolomeu.png',
      testimonialText: 'Texto do depoimento aqui...',
      ownerName: 'Fulana',
      dogName: 'Bartolomeu',
      rating: 5
    },
    {
      dogPhoto: '/assets/images/testimonials/stark.png',
      testimonialText: 'Texto do depoimento aqui...',
      ownerName: 'Fulano',
      dogName: 'Stark',
      rating: 5
    },
    {
      dogPhoto: '/assets/images/testimonials/irmaosBuldog.png',
      testimonialText: 'Texto do depoimento aqui...',
      ownerName: 'Fulanos',
      dogName: 'Nomes dos Cães',
      rating: 5
    },
    {
      dogPhoto: '/assets/images/testimonials/ragnar.png',
      testimonialText: 'Texto do depoimento aqui...',
      ownerName: 'Fulano',
      dogName: 'Ragnar',
      rating: 5
    }
  ];

  const socialProofBadges = ['+100 cães atendidos', 'Monitoramento 24h', 'Atualizações diárias'];

  return (
    <>
      <Helmet>
        <title>Mundo PartiCãoLar - Hotel e Creche para Cães em São Paulo</title>
        <meta name="description" content="Onde seu melhor amigo vive dias tão felizes quanto em casa. Hotel e creche para cães com monitoramento 24h, socialização supervisionada e muito carinho." />
      </Helmet>

      {/* Header e FloatingWhatsAppButton removidos daqui */}

      <main>
        <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Onde seu melhor amigo vive dias tão felizes quanto em casa
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-prose">
                  Ambiente seguro, acolhedor, cuidado profissional, e muita diversão para seu Aumigo(a)!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:translate-y-[-2px] active:scale-98">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Agendar uma visita pelo WhatsApp
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="transition-all duration-200 hover:translate-y-[-2px] active:scale-98">
                    <Link to="/servicos">Ver como funciona</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  {socialProofBadges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                          <img src={image.url} alt={image.alt} className="w-full h-[400px] md:h-[500px] object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quem confia, recomenda
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Veja o que os tutores e seus melhores amigos dizem sobre nós
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vagas limitadas para garantir qualidade no atendimento
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Trabalhamos com grupos pequenos para oferecer atenção individualizada e segurança máxima para cada pet.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:translate-y-[-2px] active:scale-98">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Reserve sua vaga agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer removido daqui */}
    </>
  );
}

export default HomePage;
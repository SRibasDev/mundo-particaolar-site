import React from 'react';
import { Helmet } from 'react-helmet';
import { Crown, Trees, Shield } from 'lucide-react';
import DifferentialBlock from '../components/DifferentialBlock.jsx';

function StructurePage() {
  const structureBlocks = [
    {
      icon: Crown,
      title: 'Espaço VIP',
      description: 'Acomodações confortáveis e higienizadas diariamente. Cada cão tem seu próprio espaço para descansar com tranquilidade, com camas macias e ambiente climatizado.'
    },
    {
      icon: Trees,
      title: 'Área de lazer',
      description: 'Espaço amplo e seguro para brincadeiras e socialização. Gramado natural, brinquedos variados e áreas sombreadas para os pets se divertirem com conforto.'
    },
    {
      icon: Shield,
      title: 'Protocolo de saúde',
      description: 'Exigimos carteira de vacinação em dia e avaliação comportamental prévia. Ambiente higienizado constantemente e equipe treinada em primeiros socorros.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nossa Estrutura - Mundo PartiCãoLar</title>
        <meta name="description" content="Conheça nossa estrutura: espaços VIP, área de lazer ampla e protocolos rigorosos de saúde e segurança para o seu pet." />
      </Helmet>

      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Segurança e conforto em primeiro lugar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nossa estrutura foi pensada para oferecer o melhor ambiente para o seu pet, com segurança, higiene e muito espaço para diversão
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1699309366611-c4cf7748dbec"
                  alt="Espaço VIP confortável com camas macias para descanso dos cães"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <DifferentialBlock {...structureBlocks[0]} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <DifferentialBlock {...structureBlocks[1]} />
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1598126398754-57276a6c5fd8"
                  alt="Área de lazer ampla com gramado natural para brincadeiras supervisionadas"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1679673670335-aa7f8c6e26bf"
                  alt="Equipe treinada aplicando protocolos de saúde e segurança"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <DifferentialBlock {...structureBlocks[2]} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quer ver tudo de perto?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Agende uma visita e conheça pessoalmente nossa estrutura e equipe
            </p>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 active:scale-98"
            >
              Agendar visita
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default StructurePage;
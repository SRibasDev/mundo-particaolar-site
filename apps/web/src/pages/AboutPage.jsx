import React from 'react';
import { Helmet } from 'react-helmet';
import { Eye, Heart, Users, FileText } from 'lucide-react';
import DifferentialBlock from '@/components/DifferentialBlock';

function AboutPage() {
  const differentials = [
    {
      icon: Eye,
      title: 'Monitoramento 24h',
      description: 'Câmeras em todas as áreas e equipe presente o tempo todo para garantir a segurança e bem-estar dos pets.'
    },
    {
      icon: Heart,
      title: 'Socialização supervisionada',
      description: 'Grupos pequenos e compatíveis para que os cães brinquem de forma segura e saudável, sempre sob supervisão.'
    },
    {
      icon: FileText,
      title: 'Relatórios diários',
      description: 'Você recebe fotos, vídeos e atualizações sobre como seu pet está passando o dia. Transparência total.'
    },
    {
      icon: Users,
      title: 'Equipe treinada',
      description: 'Profissionais capacitados e apaixonados por cães, prontos para oferecer the melhor cuidado e carinho.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Mundo PartiCãoLar</title>
        <meta name="description" content="Conheça o Mundo PartiCãoLar: mais do que um hotel, um segundo lar para o seu cão. Cuidado profissional com muito amor e dedicação." />
      </Helmet>

      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Mais do que um hotel, um segundo lar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                No Mundo PartiCãoLar, acreditamos que cada cão merece ser tratado com o mesmo carinho e atenção que recebe em casa. Por isso, criamos um ambiente seguro, acolhedor e divertido onde seu melhor amigo pode brincar, descansar e ser feliz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="/assets/images/about/milena-carol.png"
                  alt="Equipe do Mundo PartiCãoLar cuidando carinhosamente dos cães"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Nossa missão</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Proporcionar uma experiência única de cuidado e diversão para os cães, oferecendo aos tutores a tranquilidade de saber que seus pets estão em boas mãos.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Trabalhamos com grupos pequenos para garantir atenção individualizada, monitoramento constante e um ambiente sempre limpo e seguro.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Cada detalhe é pensado para que os cães se sintam confortáveis, felizes e amados enquanto estão conosco.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Nossos diferenciais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {differentials.map((differential, index) => (
                  <DifferentialBlock key={index} {...differential} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Venha conhecer nosso espaço
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Agende uma visita e veja pessoalmente como cuidamos dos nossos hóspedes de quatro patas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:translate-y-[-2px] active:scale-98"
              >
                Agendar visita
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
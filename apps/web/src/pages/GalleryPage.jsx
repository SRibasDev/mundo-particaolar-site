import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

function GalleryPage() {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1638766211878-6c3910aa92b6',
      caption: 'Hora da soneca 😴',
      alt: 'Cão descansando confortavelmente após brincadeiras'
    },
    {
      image: 'https://images.unsplash.com/photo-1463371009993-9472b8bdb12c',
      caption: 'Dia de diversão 🐾',
      alt: 'Cães brincando juntos em área de recreação'
    },
    {
      image: 'https://images.unsplash.com/photo-1681853081020-c7e9b289eb1f',
      caption: 'Amizades que fazem bem ❤️',
      alt: 'Dois cães interagindo de forma amigável'
    },
    {
      image: 'https://images.unsplash.com/photo-1500340581687-1c007a2596f4',
      caption: 'Momento de carinho 🥰',
      alt: 'Cuidador acariciando cão com carinho'
    },
    {
      image: 'https://images.unsplash.com/photo-1691418977981-3cecb98205cc',
      caption: 'Energia pura! ⚡',
      alt: 'Cão correndo feliz pela área de lazer'
    },
    {
      image: 'https://images.unsplash.com/photo-1703299943022-b0f59e980e47',
      caption: 'Relaxando no sol ☀️',
      alt: 'Cão aproveitando área externa com sol'
    },
    {
      image: 'https://images.unsplash.com/photo-1547475250-c61c2b4f408c',
      caption: 'Brincadeira supervisionada 🎾',
      alt: 'Cães brincando com bola sob supervisão'
    },
    {
      image: 'https://images.unsplash.com/photo-1693615774176-a5560f55ac49',
      caption: 'Felicidade garantida 🌟',
      alt: 'Cão sorrindo feliz durante atividade recreativa'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Galeria - Mundo PartiCãoLar</title>
        <meta name="description" content="Veja momentos especiais dos nossos hóspedes: brincadeiras, descanso, socialização e muita felicidade no Mundo PartiCãoLar." />
      </Helmet>

      <Header />
      <FloatingWhatsAppButton />

      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Galeria
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Momentos especiais dos nossos hóspedes de quatro patas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    index === 0 || index === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-medium text-lg">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Seu pet pode ser o próximo!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Agende uma visita e veja como seu melhor amigo pode se divertir conosco
            </p>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 active:scale-98"
            >
              Falar com a gente
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GalleryPage;
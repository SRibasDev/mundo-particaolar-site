import React from 'react';
import { Helmet } from 'react-helmet';
//mudar alt das imagens
function GalleryPage() {
  const galleryItems = [
    {
      image: '/assets/images/gallery/foto1.png',
      caption: 'Coelho ou cão? 🐰🐶',
      alt: 'Cão com cenoura'
    },
    {
      image: '/assets/images/gallery/foto2.png',
      caption: 'Cachorrinha Pintadinha🐾',
      alt: 'Cachorrinha brincando'
    },
    {
      image: '/assets/images/gallery/foto3.png',
      caption: 'Amizades que fazem bem ❤️',
      alt: 'Dois cães juntos'
    },
    {
      image: '/assets/images/gallery/foto4.png',
      caption: 'Dia de piscina 💦',
      alt: 'Cães na piscina'
    },
    {
      image: '/assets/images/gallery/foto5.png',
      caption: 'Energia pura ⚡',
      alt: 'Cão correndo'
    },
    {
      image: '/assets/images/gallery/foto6.png',
      caption: 'Brincadeira com legumes 🥕',
      alt: 'Cão deitado ao sol'
    },
    {
      image: '/assets/images/gallery/foto7.png',
      caption: 'Ei! Olha o petisco! 🐾',
      alt: 'Cães jogando com bola'
    },
    {
      image: '/assets/images/gallery/foto8.png',
      caption: 'Melhor hora do dia: hora de comer! 🍉',
      alt: 'Cão feliz'
    },
    {
      image: '/assets/images/gallery/foto9.png',
      caption: 'Aventura ao ar livre 🌿',
      alt: 'Cão em área verde'
    },
    {
      image: '/assets/images/gallery/foto10.png',
      caption: 'Hora do descanso 😴',
      alt: 'Cão descansando'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Galeria - Mundo PartiCãoLar</title>
        <meta name="description" content="Veja alguns dos momentos especiais dos nossos hóspedes: brincadeiras, descanso, socialização e muita felicidade no Mundo PartiCãoLar." />
      </Helmet>

      {/* Header e FloatingWhatsAppButton removidos daqui */}

      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Galeria
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Alguns momentos especiais dos nossos Aumigos(a)s de quatro patas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-medium text-sm md:text-base">{item.caption}</p>
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
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e quero agendar uma visita 🐾')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:translate-y-[-2px] active:scale-98"
            >
              Falar com a gente
            </a>
          </div>
        </section>
      </main>

      {/* Footer removido daqui */}
    </>
  );
}

export default GalleryPage;
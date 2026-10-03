import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Carlos Mendoza",
      location: "Madrid, España",
      text: "El tour por Cusco Mágico superó todas mis expectativas. La atención al detalle y la puntualidad fueron impecables. Los guías sabían muchísimo sobre la historia.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Laura y Andrés",
      location: "Bogotá, Colombia",
      text: "Nuestra luna de miel en Machu Picchu fue el mejor viaje de nuestras vidas gracias a Memories Destinos. Todo estuvo perfectamente organizado, desde el tren hasta el hotel.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Familia Rojas",
      location: "Lima, Perú",
      text: "Hicimos el paquete Majestuoso y los niños lo pasaron genial. Los guías tuvieron mucha paciencia y siempre hubo opciones excelentes para las comidas.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "Sofía Arango",
      location: "Santiago, Chile",
      text: "Viajé sola y me sentí segura en todo momento. La agencia siempre estuvo pendiente por WhatsApp. Los paisajes son de otro mundo, 100% recomendado.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      name: "Miguel Fernández",
      location: "CDMX, México",
      text: "Una experiencia increíble de principio a fin. El tren Vistadome y el recorrido por el Valle Sagrado fueron espectaculares. ¡Gracias por las memorias!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 6,
      name: "Elena Rossi",
      location: "Roma, Italia",
      text: "Maravillosa agencia. Nos adaptaron el itinerario a nuestros tiempos y no tuvimos que preocuparnos de absolutamente nada. Excelente servicio.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="pb-16 pt-16 md:pb-24 md:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5a9d2b] font-bold tracking-wider uppercase text-sm mb-4 block">Lo que dicen de nosotros</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">Testimonios de Viajeros</h2>
          <p className="text-slate-600 text-lg">
            Cientos de personas ya han confiado en nosotros para vivir la aventura de sus sueños. Aquí te compartimos algunas de sus experiencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-600 mb-6 flex-grow italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-800">{review.name}</h4>
                  <span className="text-sm text-slate-500">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

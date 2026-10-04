import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Exploration748897 (TripAdvisor)",
      location: "Octubre 2026 • Viaje en solitario",
      text: "Excelente servicio. Quiero destacar especialmente la atención de Ruth, quien estuvo pendiente de mí en todo momento, coordinando puntualmente los traslados, tours y hospedaje. Siempre estuvo en contacto y pendiente de cada detalle, lo que me dio mucha tranquilidad durante toda mi estadía. El hospedaje, además, fue muy bonito y con una excelente vista. Gracias, Ruth, por hacer de mi viaje a Cusco una experiencia tan linda y organizada. ¡Totalmente recomendada! ⛰️💖",
      rating: 5,
      avatar: "/trip.png"
    },
    {
      id: 2,
      name: "Nicole L (TripAdvisor)",
      location: "Agosto 2026",
      text: "Ruth es realmente increíble. No solo se asegura de que vayan a buenos lugares sino que también hasta negocia por ti, se asegura que te cobren lo que le cobran a los locales. Sabe mucho de la cultura y es realmente carismática y muy linda. 100% tomaría otro viaje con ella como guía. Ella eligió los lugares donde fuimos y todos fueron el éxito. Realmente necesitaba un abrigo que no encontré en ninguna otra parte, Ruth solita se ofreció en ir a buscarlo, caminó una hora y más entera y encontró el abrigo... Ninguna otra guía haría eso por ti.",
      rating: 5,
      avatar: "/trip.png"
    },
    {
      id: 3,
      name: "orr p (TripAdvisor)",
      location: "Septiembre 2026",
      text: "¡Experiencia increíble! El paseo en quad fue sin duda lo mejor del día. Me divertí mucho recorriendo los senderos fuera de pista y visitando Moray y las salineras de Maras. El guía fue excelente, paciente y profesional, y me dio tiempo suficiente para disfrutar realmente del paseo. Una de mis experiencias favoritas en Cusco hasta ahora. ¡Muy recomendable!",
      rating: 5,
      avatar: "/trip.png"
    },
    {
      id: 4,
      name: "Gisselle D (TripAdvisor)",
      location: "Agosto 2026",
      text: "Llevé un full day a Machu Picchu con ellos y todo salió muy bien. Te explican con detalle cada tour, coordinan contigo desde un día antes y están atentos a cualquier eventualidad durante el tour. La guía que nos asignaron fue muy buena. Si vuelvo a Cusco los buscaría nuevamente.",
      rating: 5,
      avatar: "/trip.png"
    },
    {
      id: 5,
      name: "Chris N (TripAdvisor)",
      location: "Agosto 2026",
      text: "Un día fantástico. Un amigo y yo decidimos por la mañana hacer una excursión de un día, enviamos un mensaje por WhatsApp y en 30 minutos un conductor privado estaba en la puerta. Precio razonable, servicio excelente y lo recomendaría encarecidamente.",
      rating: 5,
      avatar: "/trip.png"
    },
    {
      id: 6,
      name: "Clo V (TripAdvisor)",
      location: "Septiembre 2026",
      text: "Viaje al Valle Sagrado con mis hijas, reservé desde Ecuador con Ruth, ella estuvo pendiente de nosotras durante todo nuestro viaje. Mi experiencia fue maravillosa.",
      rating: 5,
      avatar: "/trip.png"
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
              <p className="text-sm text-slate-600 mb-6 flex-grow italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4 shadow-sm" />
                <div>
                  <h4 className="font-bold text-sm md:text-base text-slate-800">{review.name}</h4>
                  <span className="text-xs md:text-sm text-slate-500">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="https://www.tripadvisor.es/Attraction_Review-g294314-d33977181-Reviews-Destinos_Trek_Company-Cusco_Cusco_Region.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-bold text-white bg-gradient-to-r from-[#5a9d2b] to-[#1c75a5] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Ver opiniones en TripAdvisor
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

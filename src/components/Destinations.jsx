import React from 'react';

/**
 * @param {{ limit?: number }} props
 */
const Destinations = ({ limit }) => {
  const destinations = [
    {
      id: 4,
      title: 'Cusco Mágico (Full Day)',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
      price: 'Desde $99',
      rating: '4.8',
    },
    {
      id: 5,
      title: 'Cusco Mío 3D/2N',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
      price: 'Desde $399',
      rating: '4.9',
    },
    {
      id: 6,
      title: 'Cusco en tus Manos 4D/3N',
      image: 'https://images.unsplash.com/photo-1581404018318-7b9609503460?q=80&w=2070&auto=format&fit=crop',
      price: 'Desde $499',
      rating: '4.9',
    },
    {
      id: 7,
      title: 'Cusco Encantador 5D/4N',
      image: 'https://images.unsplash.com/photo-1581404018318-7b9609503460?q=80&w=2070&auto=format&fit=crop',
      price: 'Desde $599',
      rating: '4.9',
    },
    {
      id: 8,
      title: 'Cusco Express 6D/5N',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
      price: 'Desde $699',
      rating: '4.8',
    },
    {
      id: 9,
      title: 'Cusco Majestuoso 7D/6N',
      image: 'https://images.unsplash.com/photo-1581404018318-7b9609503460?q=80&w=2070&auto=format&fit=crop',
      price: 'Desde $799',
      rating: '5.0',
    },
    {
      id: 10,
      title: 'Cusco Milenario 8D/7N',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
      price: 'Desde $899',
      rating: '5.0',
    },
    {
      id: 11,
      title: 'Cusco Inolvidable 9D/8N',
      image: 'https://images.unsplash.com/photo-1581404018318-7b9609503460?q=80&w=2070&auto=format&fit=crop',
      price: 'Desde $999',
      rating: '4.9',
    },
    {
      id: 12,
      title: 'Cusco Esencial 10D/9N',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
      price: 'Desde $1,099',
      rating: '4.8',
    },
    {
      id: 13,
      title: 'Cusco Místico 11D/10N',
      image: 'https://images.unsplash.com/photo-1581404018318-7b9609503460?q=80&w=2070&auto=format&fit=crop',
      price: 'Desde $1,199',
      rating: '4.9',
    },
    {
      id: 14,
      title: 'Cusco Total 12D/11N',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
      price: 'Desde $1,299',
      rating: '5.0',
    },
    {
      id: 15,
      title: 'Cusco Supremo 13D/12N',
      image: 'https://images.unsplash.com/photo-1581404018318-7b9609503460?q=80&w=2070&auto=format&fit=crop',
      price: 'Desde $1,399',
      rating: '5.0',
    },
    {
      id: 16,
      title: 'Montaña 7 Colores (Full Day)',
      image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3da?q=80&w=800&auto=format&fit=crop',
      price: 'Consultar',
      rating: '4.9',
    },
    {
      id: 17,
      title: 'Laguna Humantay (Full Day)',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop',
      price: 'Consultar',
      rating: '4.8',
    },
    {
      id: 18,
      title: 'Valle Sagrado VIP',
      image: 'https://images.unsplash.com/photo-1510255392095-2c8c49e1f579?q=80&w=800&auto=format&fit=crop',
      price: 'Consultar',
      rating: '4.9',
    }
  ];

  const displayedDestinations = limit ? destinations.slice(0, limit) : destinations;

  return (
    <section id="destinos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#5a9d2b] uppercase tracking-wider mb-2">Destinos Populares</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Explora nuestros paquetes favoritos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayedDestinations.map((dest) => (
            <div key={dest.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10"></div>
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span className="text-sm font-bold text-slate-800">{dest.rating}</span>
                </div>
              </div>
              
              <div className="p-6 relative z-20 bg-white">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{dest.title}</h4>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a 
                    href={`https://wa.me/51961233893?text=${encodeURIComponent(`Hola, quisiera más información sobre el paquete: ${dest.title}`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#1c75a5] to-[#5a9d2b] hover:shadow-[0_0_15px_rgba(90,157,43,0.3)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Consulta rápida
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;

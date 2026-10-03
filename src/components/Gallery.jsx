import React from 'react';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop", title: "Machu Picchu Mágico", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop", title: "Cusco Histórico", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1574958269340-fa927503f3da?q=80&w=800&auto=format&fit=crop", title: "Montaña 7 Colores", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1510255392095-2c8c49e1f579?q=80&w=800&auto=format&fit=crop", title: "Valle Sagrado de los Incas", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1626244799015-83e9eb7b37db?q=80&w=800&auto=format&fit=crop", title: "Naturaleza Andina", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1596489370001-c889be8b08eb?q=80&w=800&auto=format&fit=crop", title: "Pueblo de Ollantaytambo", colSpan: "col-span-1 md:col-span-3", rowSpan: "row-span-1" },
  ];

  return (
    <section className="pb-16 pt-16 md:pb-24 md:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1c75a5] font-bold tracking-wider uppercase text-sm mb-4 block">Capturando momentos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">Nuestra Galería</h2>
          <p className="text-slate-600 text-lg">
            Un vistazo a los paisajes mágicos y experiencias inolvidables que te esperan en el corazón de los Andes peruanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${img.colSpan} ${img.rowSpan}`}>
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl md:text-2xl font-bold">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

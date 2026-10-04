import React, { useState } from 'react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Layout exacto para evitar espacios vacíos en grid de 4 columnas (desktop) y 2 (mobile)
  const layout = [
    { c: "col-span-2", r: "row-span-2" }, // 0
    { c: "col-span-1", r: "row-span-1" }, // 1
    { c: "col-span-1", r: "row-span-1" }, // 2
    { c: "col-span-1", r: "row-span-1" }, // 3
    { c: "col-span-1", r: "row-span-1" }, // 4
    { c: "col-span-2", r: "row-span-1" }, // 5
    { c: "col-span-1", r: "row-span-1" }, // 6
    { c: "col-span-1", r: "row-span-1" }, // 7
    { c: "col-span-1", r: "row-span-1" }, // 8
    { c: "col-span-1", r: "row-span-1" }, // 9
    { c: "col-span-2", r: "row-span-2" }, // 10
    { c: "col-span-1", r: "row-span-1" }, // 11
    { c: "col-span-1", r: "row-span-1" }, // 12
    { c: "col-span-2", r: "row-span-1" }, // 13
    { c: "col-span-2", r: "row-span-1" }, // 14
    { c: "col-span-1", r: "row-span-1" }, // 15
    { c: "col-span-1", r: "row-span-1" }, // 16
    { c: "col-span-2", r: "row-span-2" }, // 17
    { c: "col-span-1", r: "row-span-1" }, // 18
    { c: "col-span-1", r: "row-span-1" }, // 19
    { c: "col-span-2", r: "row-span-1" }, // 20
    { c: "col-span-2", r: "row-span-1" }, // 21
  ];

  const images = Array.from({ length: 22 }, (_, i) => ({
    src: `/galeria/gal${i + 1}.avif`,
    title: `Memories Destinos Travel`,
    colSpan: layout[i].c,
    rowSpan: layout[i].r
  }));

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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

        {/* Galería reducida: auto-rows más pequeños y grid de 4 columnas en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-3 md:gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => openLightbox(idx)}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xs md:text-sm font-bold">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-[110] transition-colors cursor-pointer"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          {/* Botón Previo */}
          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110] p-2 bg-black/50 rounded-full transition-colors cursor-pointer"
            onClick={prevImage}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Imagen Actual */}
          <div className="relative max-w-5xl w-full h-full max-h-[85vh] p-4 flex items-center justify-center">
            <img 
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fadeIn"
              onClick={(e) => e.stopPropagation()} // Evita cerrar al tocar la foto
            />
          </div>

          {/* Botón Siguiente */}
          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110] p-2 bg-black/50 rounded-full transition-colors cursor-pointer"
            onClick={nextImage}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Contador */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-semibold bg-black/50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

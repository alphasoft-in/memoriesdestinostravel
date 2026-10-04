import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[100svh] md:h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-16 md:pt-20 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/machupicchu.jpg" 
          alt="Viaje inspirador" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left mb-12 md:mb-0">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-fade-in-up">
            ✈️ Descubre el mundo con nosotros
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Crea <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5a9d2b] to-[#42b883]">Recuerdos</span><br/> Inolvidables
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-lg font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            En Memories Destinos personalizamos cada viaje para ofrecerte experiencias únicas. ¿A dónde quieres ir hoy?
          </p>
        </div>

        {/* Search/Booking Widget */}
        <div className="w-full md:w-1/2 flex justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-3xl shadow-2xl w-full max-w-md">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Busca tu próximo destino</h3>
            <form className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-1">Destino</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <select defaultValue="" className="w-full pl-10 pr-10 py-2 md:py-3 appearance-none rounded-xl bg-white/90 focus:bg-white text-slate-800 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#1c75a5] transition-colors cursor-pointer">
                    <option value="" disabled>Selecciona un destino...</option>
                    <option value="cusco_magico">Cusco Mágico (Full Day)</option>
                    <option value="cusco_mio">Cusco Mío 3D/2N</option>
                    <option value="cusco_manos">Cusco en tus Manos 4D/3N</option>
                    <option value="cusco_encantador">Cusco Encantador 5D/4N</option>
                    <option value="cusco_express">Cusco Express 6D/5N</option>
                    <option value="cusco_majestuoso">Cusco Majestuoso 7D/6N</option>
                    <option value="cusco_milenario">Cusco Milenario 8D/7N</option>
                    <option value="cusco_inolvidable">Cusco Inolvidable 9D/8N</option>
                    <option value="cusco_esencial">Cusco Esencial 10D/9N</option>
                    <option value="cusco_mistico">Cusco Místico 11D/10N</option>
                    <option value="cusco_total">Cusco Total 12D/11N</option>
                    <option value="cusco_supremo">Cusco Supremo 13D/12N</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-white/80 text-sm font-medium mb-1">Fecha</label>
                  <input type="date" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/90 focus:bg-white text-slate-800 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#1c75a5] transition-colors" />
                </div>
                <div className="w-1/2">
                  <label className="block text-white/80 text-sm font-medium mb-1">Pasajeros</label>
                  <div className="relative">
                    <select className="w-full pl-3 md:pl-4 pr-10 py-2 md:py-3 appearance-none rounded-xl bg-white/90 focus:bg-white text-slate-800 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#1c75a5] transition-colors">
                      <option>1 Persona</option>
                      <option>2 Personas</option>
                      <option>Familia</option>
                      <option>Grupo</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/51961233893?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20paquetes%20tur%C3%ADsticos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-full mt-2 md:mt-4 py-3 md:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Consultar Paquete
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
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
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold mb-6 animate-fade-in-up">
            ✈️ Descubre el mundo con nosotros
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Crea <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5a9d2b] to-[#42b883]">Recuerdos</span><br/> Inolvidables
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            En Memories Destinos personalizamos cada viaje para ofrecerte experiencias únicas. ¿A dónde quieres ir hoy?
          </p>
        </div>

        {/* Search/Booking Widget */}
        <div className="w-full md:w-1/2 flex justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl w-full max-w-md">
            <h3 className="text-2xl font-bold text-white mb-6">Busca tu próximo destino</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-1">Destino</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <select defaultValue="" className="w-full pl-10 pr-10 py-3 appearance-none rounded-xl bg-white/90 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1c75a5] transition-colors cursor-pointer">
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
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-white/90 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1c75a5] transition-colors" />
                </div>
                <div className="w-1/2">
                  <label className="block text-white/80 text-sm font-medium mb-1">Pasajeros</label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-10 py-3 appearance-none rounded-xl bg-white/90 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1c75a5] transition-colors">
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

              <a href="/destinos" className="block text-center w-full mt-4 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#1c75a5] to-[#5a9d2b] hover:shadow-[0_0_20px_rgba(90,157,43,0.4)] transition-all duration-300 hover:-translate-y-1">
                Explorar Paquetes
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

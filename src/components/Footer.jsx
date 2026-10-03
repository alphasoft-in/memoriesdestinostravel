import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-slate-900 pt-20 pb-10 text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#1c75a5]/20 blur-[120px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[50%] rounded-full bg-[#5a9d2b]/20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/logo.png" alt="Memories Travel Agency" className="h-20 w-auto mb-6 filter brightness-0 invert drop-shadow-lg object-contain scale-[1.5] origin-left -ml-2" />
            <p className="text-slate-400 mb-6 leading-relaxed">
              Tu agencia de viajes de confianza. Creamos memorias inolvidables, llevándote a los destinos más espectaculares del mundo.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/destinos" className="text-slate-400 hover:text-white transition-colors">Destinos Destacados</a></li>
              <li><a href="/testimonios" className="text-slate-400 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="/galeria" className="text-slate-400 hover:text-white transition-colors">Galería</a></li>
              <li><a href="/esnna" className="text-slate-400 hover:text-white transition-colors">ESNNA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contáctanos</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5a9d2b] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <div className="flex flex-col space-y-2">
                  <a href="https://wa.me/51961233893" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">+51 961 233 893</a>
                  <a href="https://wa.me/51970878648" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">+51 970 878 648</a>
                  <a href="https://wa.me/51968109539" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">+51 968 109 539</a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5a9d2b] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:memoriestravelagencycus@gmail.com" className="text-slate-400 hover:text-white transition-colors break-all">memoriestravelagencycus@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19cxWBJyU3/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1c75a5] hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.instagram.com/memories_travel.agency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5a9d2b] hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
              </a>
              <a href="https://www.tiktok.com/@memories.travel.a0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-slate-700 hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Memories Destinos Travel Agency. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

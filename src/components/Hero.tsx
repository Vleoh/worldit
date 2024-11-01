import { Network } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#9C4CA1] to-[#20B24D] opacity-85"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <Network size={64} className="text-white mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Instalaciones Tecnológicas WORLD IT
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Realizamos el cableado y estructurado de la red de su empresa, cumpliendo con los estándares de homologación de la industria.
          </p>
          <a 
            href="https://wa.me/+541155990107"
            className="bg-[#20B24D] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#9C4CA1] transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
}
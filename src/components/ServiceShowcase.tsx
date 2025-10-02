import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    url: '/img/img4.png',
    title: 'Centro de monitoreo inteligente',
    description: 'Video wall con IA que detecta patrones de riesgo y dispara alertas automatizadas.'
  },
  {
    url: '/img/img2.png',
    title: 'Despliegue de camaras 4K',
    description: 'Cobertura total en interiores y exteriores con cableado estructurado de alta performance.'
  },
  {
    url: '/img/img1.png',
    title: 'Infraestructura llave en mano',
    description: 'Desde el proyecto tecnico hasta el soporte remoto continuo, todo integrado.'
  }
];

export default function ServiceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#5325c7] bg-[#5325c7]/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em]">
            <Sparkles className="h-4 w-4" />
            Implementaciones reales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
            Escenarios disenados para anticipar riesgos y asegurar operaciones criticas
          </h2>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <img
              src={slides[currentSlide].url}
              alt={slides[currentSlide].title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-left text-white">
              <h3 className="text-2xl font-semibold mb-2">{slides[currentSlide].title}</h3>
              <p className="text-sm text-white/80 max-w-3xl">{slides[currentSlide].description}</p>
            </div>
          </div>
          <button
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-xl hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-xl hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? 'bg-[#5325c7] w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

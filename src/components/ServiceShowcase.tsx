import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServiceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "/img/img4.png",
      caption: "Centros de datos modernos"
    },
    {
      url:"/img/img2.png",
      caption: "Instalación de redes"
    },
    {
      url: "/img/img1.png",
      caption: "Cableado estructurado"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Nuestro Trabajo
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
            <img
              src={images[currentSlide].url}
              alt={images[currentSlide].caption}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-xl font-semibold">{images[currentSlide].caption}</p>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
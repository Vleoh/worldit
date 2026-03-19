import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://worldit.com.ar/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-21-at-1.41.png',
    title: 'Instalaciones de AP Outdoor e indoor',
    detail: 'Implementacion de conectividad inalambrica para interiores y exteriores.',
  },
  {
    url: 'https://worldit.com.ar/wp-content/uploads/2022/07/FIBRA-2.png',
    title: 'Instalaciones de fibra optica',
    detail: 'Backbone de alta capacidad para redes empresariales y enlaces criticos.',
  },
  {
    url: 'https://worldit.com.ar/wp-content/uploads/2022/07/CABLEADO-INT.png',
    title: 'Cableado estructurado',
    detail: 'Tendidos ordenados y certificados para oficinas, salas tecnicas y CPD.',
  },
  {
    url: 'https://worldit.com.ar/wp-content/uploads/2022/07/Fusionadora-world-it.png',
    title: 'Soporte y mantenimiento de redes',
    detail: 'Diagnostico, correccion y mejora continua sobre infraestructura activa.',
  },
  {
    url: 'https://worldit.com.ar/wp-content/uploads/2022/07/data.jpg',
    title: 'Centro de Procesamiento de Datos',
    detail: 'Adecuacion de salas a normas vigentes para operacion y escalabilidad.',
  },
];

export default function ServiceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = useMemo(() => slides[currentSlide], [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">Obras y despliegues</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Proyectos reales con documentacion y trazabilidad tecnica
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Esta galeria resume frentes de trabajo de World IT en campo. Cada intervencion combina ejecucion, soporte y
            continuidad operativa para empresas con infraestructura critica.
          </p>

          <div className="mt-8 space-y-3">
            {[
              'Relevamiento inicial y plan de implementacion',
              'Instalacion y ordenamiento fisico de red',
              'Verificacion, ajuste y mantenimiento post entrega',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_15px_rgba(32,178,77,0.9)]"></span>
                <p className="text-sm text-[var(--text-secondary)]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-2)] shadow-[var(--shadow-main)]">
            <img
              src={activeSlide.url}
              alt={activeSlide.title}
              className="h-[440px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,17,0.06)_20%,rgba(6,8,17,0.8)_88%)]"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-[var(--green)]/40 bg-[var(--green)]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
                Caso documentado
              </span>
              <h3 className="mt-4 max-w-xl font-heading text-2xl text-white sm:text-3xl">{activeSlide.title}</h3>
              <p className="mt-3 max-w-xl text-sm text-slate-100/90 sm:text-base">{activeSlide.detail}</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-[var(--green)]' : 'w-2.5 bg-[var(--text-muted)]/40 hover:bg-[var(--text-muted)]/70'
                  }`}
                  aria-label={`Ir al slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="rounded-full border border-[var(--border-color)] bg-[var(--surface-3)] p-2 text-[var(--text-secondary)] transition-colors hover:border-[var(--violet)] hover:text-[var(--violet)]"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full border border-[var(--border-color)] bg-[var(--surface-3)] p-2 text-[var(--text-secondary)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

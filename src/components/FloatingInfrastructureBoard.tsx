import { Cable, Server, Waypoints, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

type InfrastructureCard = {
  title: string;
  color: string;
  icon: JSX.Element;
  duration: number;
  loadWidth: string;
  rows: string[];
};

const cards: InfrastructureCard[] = [
  {
    title: 'FIBRA ÓPTICA',
    color: 'var(--green)',
    icon: <Waypoints className="h-4 w-4" />,
    duration: 10.5,
    loadWidth: '82%',
    rows: ['backbone om4 / os2', 'troncales metropolitanas', 'distribución de campus', 'enlaces de baja latencia'],
  },
  {
    title: 'CABLEADO ESTRUCTURADO',
    color: 'var(--violet)',
    icon: <Cable className="h-4 w-4" />,
    duration: 8.9,
    loadWidth: '74%',
    rows: ['cat6a y cat7', 'ordenamiento de patcheras', 'certificación de bocas', 'topologías escalables'],
  },
  {
    title: 'WIFI CORPORATIVO',
    color: 'var(--accent-orange)',
    icon: <Wifi className="h-4 w-4" />,
    duration: 9.7,
    loadWidth: '68%',
    rows: ['indoor y outdoor', 'análisis de cobertura', 'roaming estable', 'capacidad concurrente'],
  },
  {
    title: 'RACKS E INFRAESTRUCTURA',
    color: 'var(--green)',
    icon: <Server className="h-4 w-4" />,
    duration: 11.3,
    loadWidth: '79%',
    rows: ['racks murales y de piso', 'canalización y energía', 'flujo de aire', 'estándares de sitio'],
  },
];

export default function FloatingInfrastructureBoard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <div className="network-shell absolute inset-8 overflow-hidden rounded-[1.8rem] border border-white/8">
      <img
        src="/img/img4.png"
        alt="Infraestructura World IT"
        className="absolute inset-0 h-full w-full object-cover opacity-16 saturate-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,22,25,0.3),rgba(21,22,25,0.82))]"></div>
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      <div className="pointer-events-none absolute inset-x-8 top-8 flex items-center justify-between rounded-sm border border-white/8 bg-black/18 px-4 py-4">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/56">arquitectura conectada</p>
        <div className="flex items-center gap-2">
          {cards.map((card, index) => (
            <span
              key={card.title}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex ? 'w-10' : 'w-6 bg-white/10'
              }`}
              style={index === activeIndex ? { backgroundColor: card.color } : undefined}
            ></span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-10 bottom-10 top-28 overflow-hidden rounded-[1.45rem] px-2">
        <article
          key={activeCard.title}
          className="floating-card card-fade-in flex h-full flex-col rounded-[1.35rem] border border-white/10 bg-[rgba(12,13,16,0.84)] px-6 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-[2.1rem] font-bold uppercase leading-[0.9] tracking-[0.04em] text-white">
                {activeCard.title}
              </h3>
            </div>

            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-white/8 bg-black/30"
              style={{ color: activeCard.color }}
            >
              {activeCard.icon}
            </span>
          </div>

          <div className="mt-6 flex-1 overflow-hidden rounded-[1rem] border border-white/8 bg-black/20">
            <div className="slot-track" style={{ animationDuration: `${activeCard.duration}s` }}>
              {[...activeCard.rows, ...activeCard.rows].map((row, rowIndex) => (
                <div
                  key={`${activeCard.title}-${row}-${rowIndex}`}
                  className="flex h-12 items-center justify-between gap-3 border-b border-white/6 px-5 font-mono text-[0.72rem] font-medium lowercase tracking-[0.03em] text-white/70 last:border-b-0"
                >
                  <span>{row}</span>
                  <span className="text-white/24">{String((rowIndex % activeCard.rows.length) + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-1.5 flex-1 rounded-full bg-white/8">
              <span
                className="block h-full rounded-full"
                style={{
                  width: activeCard.loadWidth,
                  backgroundColor: activeCard.color,
                }}
              ></span>
            </div>
            <span className="font-mono text-[0.58rem] font-medium lowercase tracking-[0.04em] text-white/38">
              auto
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}

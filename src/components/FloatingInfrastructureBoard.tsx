import { useEffect, useRef, useState } from 'react';

type InfrastructureCard = {
  title: string;
  color: string;
  width: string;
  top: string;
  left: string;
  shiftX: number;
  shiftY: number;
  rotateX: number;
  rotateY: number;
  duration: number;
  loadWidth: string;
  rows: string[];
};

const cards: InfrastructureCard[] = [
  {
    title: 'Fibra optica',
    color: 'var(--green)',
    width: '44%',
    top: '10%',
    left: '7%',
    shiftX: -16,
    shiftY: -10,
    rotateX: 2.8,
    rotateY: 5.6,
    duration: 10.5,
    loadWidth: '82%',
    rows: ['Backbone OM4 / OS2', 'Troncales metropolitanas', 'Distribucion de campus', 'Enlaces de baja latencia'],
  },
  {
    title: 'Cableado estructurado',
    color: 'var(--violet)',
    width: '40%',
    top: '11%',
    left: '52%',
    shiftX: 14,
    shiftY: -12,
    rotateX: 2.2,
    rotateY: -5.2,
    duration: 8.9,
    loadWidth: '74%',
    rows: ['Cat6A y Cat7', 'Ordenamiento de patcheras', 'Certificacion de bocas', 'Topologias escalables'],
  },
  {
    title: 'WiFi corporativo',
    color: 'var(--accent-orange)',
    width: '42%',
    top: '53%',
    left: '10%',
    shiftX: -12,
    shiftY: 13,
    rotateX: -2.6,
    rotateY: 4.4,
    duration: 9.7,
    loadWidth: '68%',
    rows: ['Indoor y outdoor', 'Analisis de cobertura', 'Roaming estable', 'Capacidad concurrente'],
  },
  {
    title: 'Racks e infraestructura',
    color: 'var(--green)',
    width: '41%',
    top: '57%',
    left: '54%',
    shiftX: 16,
    shiftY: 11,
    rotateX: -2.4,
    rotateY: -4.8,
    duration: 11.3,
    loadWidth: '79%',
    rows: ['Racks murales y de piso', 'Canalizacion y energia', 'Flujo de aire', 'Estandares de sitio'],
  },
];

export default function FloatingInfrastructureBoard() {
  const boardRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [motion, setMotion] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const tick = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

      setMotion({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = boardRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    targetRef.current = {
      x: (x - 0.5) * 2,
      y: (y - 0.5) * 2,
    };
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    targetRef.current = { x: 0, y: 0 };
  };

  return (
    <div
      ref={boardRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      className="network-shell absolute inset-8 overflow-hidden rounded-[1.8rem] border border-white/8"
    >
      <img
        src="/img/img4.png"
        alt="Infraestructura World IT"
        className="absolute inset-0 h-full w-full object-cover opacity-16 saturate-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,22,25,0.3),rgba(21,22,25,0.82))]"></div>
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      <div className="pointer-events-none absolute inset-x-8 top-8 flex items-center justify-between rounded-sm border border-white/8 bg-black/18 px-4 py-4">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/50">Arquitectura conectada</p>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--green)]"></span>
          <span className="h-1.5 w-10 rounded-full bg-white/10"></span>
          <span className="h-1.5 w-8 rounded-full bg-[var(--violet)]/80"></span>
          <span className="h-1.5 w-6 rounded-full bg-[var(--accent-orange)]/80"></span>
        </div>
      </div>

      {cards.map((card) => {
        const transform = `translate3d(${motion.x * card.shiftX}px, ${motion.y * card.shiftY}px, 0) rotateX(${
          motion.y * card.rotateX
        }deg) rotateY(${motion.x * card.rotateY}deg)`;

        return (
          <article
            key={card.title}
            style={{
              top: card.top,
              left: card.left,
              width: card.width,
              transform,
            }}
            className="floating-card absolute rounded-[1.15rem] border border-white/10 bg-[rgba(12,13,16,0.82)] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
          >
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: card.color }}></span>
              <h3 className="text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white">{card.title}</h3>
            </div>

            <div className="mt-4 h-28 overflow-hidden rounded-[0.9rem] border border-white/8 bg-black/20">
              <div
                className={`slot-track ${isHovered ? 'slot-paused' : ''}`}
                style={{ animationDuration: `${card.duration}s` }}
              >
                {[...card.rows, ...card.rows].map((row, index) => (
                  <div
                    key={`${card.title}-${row}-${index}`}
                    className="flex h-10 items-center gap-3 border-b border-white/6 px-4 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-white/72 last:border-b-0"
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: card.color }}></span>
                    <span>{row}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 h-1.5 w-full rounded-full bg-white/8">
              <span
                className="block h-full rounded-full"
                style={{
                  width: card.loadWidth,
                  backgroundColor: card.color,
                }}
              ></span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

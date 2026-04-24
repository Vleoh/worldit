import { Cable, Server, Waypoints, Wifi } from 'lucide-react';

type InfrastructureCard = {
  title: string;
  color: string;
  module: string;
  icon: JSX.Element;
  width: string;
  top: string;
  left: string;
  duration: number;
  loadWidth: string;
  rows: string[];
};

const cards: InfrastructureCard[] = [
  {
    title: 'Fibra optica',
    color: 'var(--green)',
    module: 'service.node/01',
    icon: <Waypoints className="h-4 w-4" />,
    width: '44%',
    top: '10%',
    left: '7%',
    duration: 10.5,
    loadWidth: '82%',
    rows: ['backbone om4 / os2', 'troncales metropolitanas', 'distribucion de campus', 'enlaces de baja latencia'],
  },
  {
    title: 'Cableado estructurado',
    color: 'var(--violet)',
    module: 'service.node/02',
    icon: <Cable className="h-4 w-4" />,
    width: '40%',
    top: '11%',
    left: '52%',
    duration: 8.9,
    loadWidth: '74%',
    rows: ['cat6a y cat7', 'ordenamiento de patcheras', 'certificacion de bocas', 'topologias escalables'],
  },
  {
    title: 'WiFi corporativo',
    color: 'var(--accent-orange)',
    module: 'service.node/03',
    icon: <Wifi className="h-4 w-4" />,
    width: '42%',
    top: '53%',
    left: '10%',
    duration: 9.7,
    loadWidth: '68%',
    rows: ['indoor y outdoor', 'analisis de cobertura', 'roaming estable', 'capacidad concurrente'],
  },
  {
    title: 'Racks e infraestructura',
    color: 'var(--green)',
    module: 'service.node/04',
    icon: <Server className="h-4 w-4" />,
    width: '41%',
    top: '57%',
    left: '54%',
    duration: 11.3,
    loadWidth: '79%',
    rows: ['racks murales y de piso', 'canalizacion y energia', 'flujo de aire', 'estandares de sitio'],
  },
];

export default function FloatingInfrastructureBoard() {
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
        <p className="font-mono text-[0.66rem] font-medium lowercase tracking-[0.08em] text-white/50">
          architecture.connected
        </p>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-10 rounded-full bg-white/10"></span>
          <span className="h-1.5 w-8 rounded-full bg-[var(--violet)]/80"></span>
          <span className="h-1.5 w-6 rounded-full bg-[var(--accent-orange)]/80"></span>
        </div>
      </div>

      {cards.map((card) => {
        return (
          <article
            key={card.title}
            style={{
              top: card.top,
              left: card.left,
              width: card.width,
            }}
            className="floating-card absolute rounded-[1.15rem] border border-white/10 bg-[rgba(12,13,16,0.82)] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.58rem] font-medium lowercase tracking-[0.06em] text-white/34">
                  {card.module}
                </p>
                <h3 className="mt-2 font-mono text-[0.9rem] font-bold uppercase tracking-[0.12em] text-white">
                  {card.title}
                </h3>
              </div>

              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-[0.8rem] border border-white/8 bg-black/30"
                style={{ color: card.color }}
              >
                {card.icon}
              </span>
            </div>

            <div className="mt-4 h-28 overflow-hidden rounded-[0.9rem] border border-white/8 bg-black/20">
              <div className="slot-track" style={{ animationDuration: `${card.duration}s` }}>
                {[...card.rows, ...card.rows].map((row, index) => (
                  <div
                    key={`${card.title}-${row}-${index}`}
                    className="flex h-10 items-center justify-between gap-3 border-b border-white/6 px-4 font-mono text-[0.7rem] font-medium lowercase tracking-[0.03em] text-white/68 last:border-b-0"
                  >
                    <span>{row}</span>
                    <span className="text-white/24">{String((index % card.rows.length) + 1).padStart(2, '0')}</span>
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

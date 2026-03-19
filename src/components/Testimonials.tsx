import { Building2, CheckCircle2, Network, Shield } from 'lucide-react';

const pillars = [
  {
    icon: <Network className="h-5 w-5 text-[var(--green)]" />,
    title: 'Telecomunicaciones eficientes',
    text: 'Disenamos e integramos redes para que cada sede tenga conectividad estable y previsible.',
  },
  {
    icon: <Shield className="h-5 w-5 text-[var(--violet)]" />,
    title: 'Estandares de homologacion',
    text: 'Cada instalacion se ejecuta bajo criterios tecnicos de industria y buenas practicas de ordenamiento.',
  },
  {
    icon: <Building2 className="h-5 w-5 text-[var(--green)]" />,
    title: 'Foco en empresas',
    text: 'World IT nace para resolver necesidades reales de empresas que dependen de su red para operar.',
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">Nosotros</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            WORLD IT conecta tecnologia, negocio y continuidad
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            "WORLD IT nace de la necesidad que presentan las empresas para poder estructurar y conectar las
            telecomunicaciones de manera eficiente".
          </p>

          <div className="mt-8 grid gap-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-2)] p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="mb-2 inline-flex rounded-lg border border-[var(--border-color)] bg-[var(--surface-3)] p-2">{pillar.icon}</div>
                <h3 className="font-semibold text-[var(--text-primary)]">{pillar.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{pillar.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--green)]/35 bg-[var(--green)]/10 p-4">
            <p className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--green)]" />
              Tambien proveemos instalacion, soporte tecnico y mantenimiento de sistemas de video vigilancia con DVR y
              NVR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

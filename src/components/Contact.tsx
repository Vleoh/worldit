import { ArrowRight, Headset, Mail, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const footerColumns = [
  {
    title: 'Core stack',
    items: ['Redes troncales', 'Backbone IP', 'Protocolos físicos'],
  },
  {
    title: 'Navegación',
    items: ['Infraestructura', 'Método', 'Proyectos'],
  },
  {
    title: 'Contacto',
    items: ['info@worldit.com.ar', '+54 11 5599 0107', 'Buenos Aires, AR'],
  },
];

const supportCards = [
  {
    icon: <Headset className="h-5 w-5 text-[var(--green)]" />,
    title: 'Consultoría 24/7',
    description: 'Arquitectos de infraestructura disponibles para incidentes, escalado y remediación.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-[var(--violet)]" />,
    title: 'Certificaciones',
    description: 'Criterios de seguridad, homologación y continuidad operativa en cada despliegue.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xrbgpljq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje');
      }

      toast.success('Solicitud enviada.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error('Falló el envío. Intente nuevamente.');
    }
  };

  return (
    <section id="contact" className="bg-[var(--page-bg)] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <ToastContainer position="bottom-right" theme="dark" />

      <div className="section-shell">
        <div className="border-b border-white/8 pb-16 text-center">
          <p className="eyebrow justify-center">Escala operativa</p>
          <h2 className="mt-6 font-heading text-5xl uppercase leading-[0.88] text-white sm:text-6xl lg:text-7xl">
            Listo para escalar
            <span className="block text-[var(--green)]">tu núcleo digital?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            Diseñamos el sistema nervioso de tu compañía. Sin fallos. Sin límites.
          </p>
          <a
            href="#formulario"
            className="mt-8 inline-flex items-center gap-2 rounded-sm border border-[var(--green)] bg-[var(--green)] px-6 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_24px_rgba(74,222,128,0.22)]"
          >
            Activa tu infraestructura
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <article className="tech-panel rounded-sm p-7 sm:p-8">
              <p className="eyebrow">Control de enlace</p>
              <h3 className="mt-5 font-heading text-5xl uppercase leading-[0.9] text-white">
                Mesa de coordinación técnica
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Coordinamos relevamientos, despliegues, soporte y rediseños de infraestructura para redes empresariales.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-sm border border-white/8 bg-white/[0.04] px-4 py-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[rgba(74,222,128,0.12)]">
                    <Mail className="h-4 w-4 text-[var(--green)]" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">Correo operacional</p>
                    <p className="mt-1 text-sm text-white/82">info@worldit.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-sm border border-white/8 bg-white/[0.04] px-4 py-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[rgba(156,76,161,0.12)]">
                    <PhoneCall className="h-4 w-4 text-[var(--violet)]" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">Línea directa</p>
                    <p className="mt-1 text-sm text-white/82">+54 11 5599 0107</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-sm border border-white/8 bg-white/[0.04] px-4 py-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[rgba(249,115,22,0.12)]">
                    <MapPin className="h-4 w-4 text-[var(--accent-orange)]" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">Hub logístico</p>
                    <p className="mt-1 text-sm text-white/82">Buenos Aires, operaciones onsite y remotas.</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportCards.map((card) => (
                <article key={card.title} className="tech-panel rounded-sm p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-white/8 bg-black/40">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 font-heading text-3xl uppercase leading-[0.92] text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{card.description}</p>
                </article>
              ))}
            </div>
          </div>

          <article id="formulario" className="tech-panel rounded-sm p-7 sm:p-8">
            <div className="flex flex-col gap-3 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Solicitud guiada</p>
                <h3 className="mt-5 font-heading text-5xl uppercase leading-[0.9] text-white">Activa una propuesta técnica</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/66">
                <span className="node-pulse inline-flex h-2 w-2 rounded-full bg-[var(--green)]"></span>
                SLA disponible
              </span>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/42">Nombre</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full rounded-sm border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/22 focus:border-[var(--green)]"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/42">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    required
                    className="w-full rounded-sm border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/22 focus:border-[var(--green)]"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/42">Compañía</span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de la empresa"
                  className="w-full rounded-sm border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/22 focus:border-[var(--green)]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/42">Alcance</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Describe sedes, criticidad, volumen de enlaces y tiempos objetivo."
                  className="w-full resize-none rounded-sm border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/22 focus:border-[var(--green)]"
                ></textarea>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[var(--green)] bg-[var(--green)] px-6 py-4 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                Enviar solicitud
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </article>
        </div>

        <footer className="border-t border-white/8 py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <img src="/img/logonew.png" alt="World IT" className="h-12 w-auto" />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/56">
                Infraestructura, seguridad y continuidad para empresas que necesitan una base técnica confiable.
              </p>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/36">{column.title}</p>
                <div className="mt-5 space-y-3 text-sm text-white/62">
                  {column.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/34 md:flex-row md:items-center md:justify-between">
            <span>(c) 2026 World IT infrastructure. All systems operational.</span>
            <span className="text-[var(--green)]">Uptime terminal: 99.99%</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

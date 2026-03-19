import { useState } from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

      if (response.ok) {
        toast.success('Mensaje enviado con exito.');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        toast.error('No se pudo enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Hubo un error inesperado.');
    }
  };

  return (
    <section id="contact" className="relative px-4 pb-0 pt-24 sm:px-6 lg:px-8">
      <ToastContainer position="bottom-right" theme="colored" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[var(--border-color)] bg-[linear-gradient(150deg,rgba(156,76,161,0.2),rgba(32,178,77,0.16))] p-7 shadow-[var(--shadow-main)] backdrop-blur-xl sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Contacto</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
              Listos para potenciar tu red
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Escribinos para coordinar un relevamiento tecnico y una propuesta ajustada al alcance de tu operacion.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:info@worldit.com.ar"
                className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--green)]/60"
              >
                <Mail className="h-4 w-4 text-[var(--green)]" />
                info@worldit.com.ar
              </a>
              <a
                href="https://wa.me/541155990107"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--green)]/60"
              >
                <Phone className="h-4 w-4 text-[var(--green)]" />
                +54 11 5599 0107
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                {
                  href: 'https://www.instagram.com/world.it_?igsh=MXdlbWI2MzlzaGJnMQ==',
                  icon: Instagram,
                  label: 'Instagram',
                },
                {
                  href: 'https://www.facebook.com/p/World-it-100083622613322/?locale=es_LA',
                  icon: Facebook,
                  label: 'Facebook',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-2)] text-[var(--text-secondary)] transition-all hover:-translate-y-0.5 hover:border-[var(--violet)] hover:text-[var(--violet)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-2)] p-7 shadow-[var(--shadow-main)] backdrop-blur-2xl sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green)]">Formulario tecnico</p>
            <h3 className="mt-3 font-heading text-2xl text-[var(--text-primary)]">Contanos tu necesidad</h3>

            <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Nombre</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[var(--violet)] focus:ring-2 focus:ring-[var(--violet)]/20"
                    placeholder="Tu nombre"
                    required
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[var(--violet)] focus:ring-2 focus:ring-[var(--violet)]/20"
                    placeholder="tu@email.com"
                    required
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Empresa</span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[var(--green)] focus:ring-2 focus:ring-[var(--green)]/20"
                  placeholder="Nombre de la empresa"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Mensaje</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[var(--green)] focus:ring-2 focus:ring-[var(--green)]/20"
                  placeholder="Contanos alcance, sedes y urgencia."
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(110deg,var(--violet),var(--green))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5"
              >
                Enviar solicitud
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t border-[var(--border-color)] bg-[var(--surface-2)] py-7 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-center text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <span>World IT | Infraestructura y conectividad empresarial</span>
          <span>Copyright (c) 2026</span>
        </div>
      </footer>
    </section>
  );
}


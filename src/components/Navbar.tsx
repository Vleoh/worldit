import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '#top', label: 'Network' },
  { href: '#metrics', label: 'Infraestructura' },
  { href: '#method', label: 'Seguridad' },
  { href: '#projects', label: 'Protocolos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(2,6,23,0.82)] backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0">
          <img src="/img/witblanco.png" alt="World IT" className="h-12 w-auto md:h-14" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/68 transition-colors hover:text-[var(--green)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm border border-[var(--green)] bg-[var(--green)] px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Contactar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-sm border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[rgba(2,6,23,0.96)] transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="section-shell flex flex-col gap-2 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-sm border border-white/8 bg-white/5 px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/78"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex justify-center rounded-sm bg-[var(--green)] px-4 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-slate-950"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}

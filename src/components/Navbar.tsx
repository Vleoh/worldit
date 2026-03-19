import { Menu, Moon, Sun, X, Zap } from 'lucide-react';
import { useState } from 'react';

type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

const links = [
  { href: '#services', label: 'Servicios' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#about', label: 'Nosotros' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  const logoSrc = isDark ? '/img/witblanco.png' : '/img/wit.png';

  const navClasses = isDark
    ? 'border border-white/20 bg-slate-950/92 shadow-[0_14px_44px_rgba(2,8,20,0.65)]'
    : 'border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.16)]';

  const menuPanelClasses = isDark
    ? 'border-white/20 bg-slate-950/92'
    : 'border-slate-200 bg-white/95';

  const linkClasses = isDark
    ? 'text-sm font-semibold uppercase tracking-[0.15em] text-slate-100 transition-colors hover:text-[var(--green)]'
    : 'text-sm font-semibold uppercase tracking-[0.15em] text-slate-700 transition-colors hover:text-[var(--green)]';

  const iconButtonClasses = isDark
    ? 'border-white/25 bg-white/5 text-slate-100 hover:text-[var(--violet)]'
    : 'border-slate-300 bg-white text-slate-700 hover:text-[var(--violet)]';

  const mobileToggleClasses = isDark
    ? 'border-white/25 bg-white/5 text-slate-100'
    : 'border-slate-300 bg-white text-slate-700';

  const ctaClasses = isDark
    ? 'border-[var(--green)]/45 bg-[var(--green)]/15 text-slate-100 hover:bg-[var(--green)]/24'
    : 'border-[var(--green)]/45 bg-[var(--green)]/12 text-slate-800 hover:bg-[var(--green)]/22';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-4 backdrop-blur-2xl sm:px-6 lg:px-8 ${navClasses}`}
      >
        <a href="#top" className="flex items-center">
          <img src={logoSrc} alt="World IT" className="h-10 w-auto md:h-12" />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onToggleTheme}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${iconButtonClasses}`}
            aria-label="Alternar tema"
            type="button"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="https://wa.me/541155990107"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5 ${ctaClasses}`}
          >
            <Zap className="h-4 w-4 text-[var(--green)]" />
            Consulta rapida
          </a>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`rounded-lg border p-2 md:hidden ${mobileToggleClasses}`}
          aria-label="Abrir menu"
          type="button"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`mx-3 overflow-hidden rounded-b-2xl border border-t-0 backdrop-blur-2xl transition-all duration-300 md:hidden ${menuPanelClasses} ${
          isOpen ? 'max-h-96 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.2)]' : 'max-h-0 border-transparent py-0'
        }`}
      >
        <div className="flex flex-col gap-2 px-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-[var(--green)] ${
                isDark ? 'text-slate-100 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 flex gap-2">
            <button
              onClick={onToggleTheme}
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] ${iconButtonClasses}`}
              type="button"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === 'dark' ? 'Claro' : 'Oscuro'}
            </button>

            <a
              href="https://wa.me/541155990107"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={`inline-flex flex-1 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] ${ctaClasses}`}
            >
              Consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

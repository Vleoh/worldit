import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceShowcase from './components/ServiceShowcase';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

type ThemeMode = 'dark' | 'light';

const THEME_KEY = 'worldit-theme';

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="tech-grid absolute inset-0 opacity-70"></div>
        <div className="animate-aurora absolute -left-20 -top-44 h-[34rem] w-[34rem] rounded-full bg-[var(--violet)]/25 blur-[120px]"></div>
        <div className="animate-aurora-delay absolute -bottom-20 right-[-9rem] h-[32rem] w-[32rem] rounded-full bg-[var(--green)]/20 blur-[120px]"></div>
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <Services />
        <ServiceShowcase />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;

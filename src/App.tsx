import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ServiceShowcase from './components/ServiceShowcase';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-24" data-scroll-container>
        <Hero />
        <Services />
        <About />
        <ServiceShowcase />
        <Clients />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;

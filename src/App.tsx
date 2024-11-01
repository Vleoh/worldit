import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceShowcase from './components/ServiceShowcase';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ServiceShowcase />
      <Clients />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
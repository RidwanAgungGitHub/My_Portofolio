import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Stats from './components/Stats';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'luxury');
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* DaisyUI CDN */}
      <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.24/dist/full.min.css" rel="stylesheet" type="text/css" />
      
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      {/* <Stats /> */}
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
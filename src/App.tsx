import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Instructors from './components/Instructors';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Classes />
      <Instructors />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
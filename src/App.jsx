import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import Diver from './components/Diver';
import MisyonVizyon from './sections/MisyonVizyon';
import Ciftlikler from './sections/Ciftlikler';

function App() {
  return (
    <div className="min-h-screen relative bg-sikiminkeyfi-dark">
      <SmoothScroll />
      <Diver />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <MisyonVizyon />
        <Ciftlikler />
        <Contact />
      </main>
      <Footer />
    </div >
  );
}

export default App;


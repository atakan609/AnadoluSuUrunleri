import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import Diver from './components/Diver';
import MissionVision from './sections/MissionVision';
import Farms from './sections/Farms';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Scroll indikçe arkaplanı koyulaştır (derinlik efekti)
    gsap.to('.wave-gradient-deep', {
      opacity: 0.6, // Neredeyse tamamen kapatarak çok derin hissi ver
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5
      }
    });
  }, []);

  return (
    <div className="min-h-screen relative text-text-light">
      <div className="wave-gradient-bg"></div>
      <div className="wave-gradient-deep"></div>
      <SmoothScroll />
      <Diver />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <MissionVision />
        <Farms />
        <Contact />
      </main>
      <Footer />
    </div >
  );
}

export default App;


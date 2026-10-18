import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { ReactLenis } from 'lenis/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ── Initial loader ── */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  /* ── Scroll handler ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min((window.scrollY / documentHeight) * 100, 100));

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 160 && bottom >= 160;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="min-h-screen bg-[#0a0a0a] text-neutral-400 font-sans selection:bg-white/15 selection:text-white overflow-x-hidden relative">

        {/* ── Fixed depth radial mesh gradient ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(80,80,80,0.12) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* ── Fixed noise/grain texture overlay ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
          aria-hidden="true"
        />

        {/* ── Loading overlay ── */}
        {loading && (
          <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-8 h-8 border border-neutral-700 border-t-white rounded-full animate-spin mx-auto" />
              <div className="section-label">Initializing</div>
            </div>
          </div>
        )}

        {/* ── Skip link ── */}
        <a href="#main-content" className="skip-link">Skip to content</a>

        {/* ── Navbar ── */}
        <Navbar
          activeSection={activeSection}
          scrolled={scrolled}
          scrollProgress={scrollProgress}
          scrollToSection={scrollToSection}
        />

        {/* ── Main content ── */}
        <main id="main-content" className="relative z-10">
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* ── Footer ── */}
        <Footer />
      </div>
    </ReactLenis>
  );
}

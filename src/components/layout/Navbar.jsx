import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import useCairoTime from '../../useCairoTime';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

/* ─────────────────────────────────────────────────
   Navbar · slim editorial bar. Hairline bottom rule
   appears after scrolling; active section tracked
   with an IntersectionObserver. Full-screen menu on
   mobile.
───────────────────────────────────────────────── */
const Navbar = () => {
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const time = useCairoTime();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 24); if (window.scrollY < 120) setActive(''); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    document.body.style.overflow = 'hidden';
    const first = menuRef.current?.querySelector('button, a');
    first?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') { setOpen(false); return; }
      if (event.key !== 'Tab') return;
      const nodes = [toggleRef.current, ...menuRef.current.querySelectorAll('button, a')].filter(Boolean);
      const index = nodes.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); nodes.at(-1).focus(); }
      else if (!event.shiftKey && index === nodes.length - 1) { event.preventDefault(); nodes[0].focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); previous?.focus(); };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/95 border-b hairline'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
          className="flex items-baseline gap-2 group"
          aria-label="Back to top"
        >
          <span className="font-serif text-2xl text-paper leading-none">AK</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint group-hover:text-gold transition-colors">
            ©26
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => goTo(id)}
                aria-current={active === id ? 'true' : undefined}
                className={`u-link font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active === id ? 'text-gold' : 'text-muted hover:text-paper'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: local time + availability */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="font-mono text-[11px] tracking-[0.15em] text-faint tabular-nums">
            CAIRO {time}
          </span>
          <a
            href={personalInfo.cvPath}
            download
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink bg-paper px-4 py-2 hover:bg-goldbright transition-colors duration-300"
          >
            Résumé
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          className="lg:hidden text-paper p-3 -mr-3"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-ink z-40 flex flex-col justify-between px-6 py-6 overflow-y-auto"
          >
            <ul className="flex flex-col gap-2">
              {LINKS.map(({ id, label }, i) => (
                <li key={id} className="border-b hairline">
                  <button
                    onClick={() => goTo(id)}
                    className="w-full flex items-baseline justify-between py-4 text-left group"
                  >
                    <span className="font-serif text-4xl text-paper group-hover:text-gold transition-colors">
                      {label}
                    </span>
                    <span className="font-mono text-xs text-faint">
                      0{i + 1}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.15em] text-faint tabular-nums">
                CAIRO {time}
              </span>
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink bg-paper px-4 py-2"
              >
                Résumé
                <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

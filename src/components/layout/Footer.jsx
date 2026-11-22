import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import useCairoTime from '../../useCairoTime';

/* ─────────────────────────────────────────────────
   Footer · quiet colophon. Monogram, local time,
   socials, back-to-top.
───────────────────────────────────────────────── */
const Footer = () => {
  const time = useCairoTime();

  return (
    <footer className="border-t hairline">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-2xl text-paper leading-none">AK</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint mt-2">
            © 2026 Ahmed Karam · Cairo, EG {time}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-gold transition-colors duration-300"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-gold transition-colors duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-muted hover:text-gold transition-colors duration-300"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="ml-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-faint hover:text-paper transition-colors duration-300"
          >
            Top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

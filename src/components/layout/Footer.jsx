import React from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import useCairoTime from "../../useCairoTime";

/* ─────────────────────────────────────────────────
   Footer · quiet colophon. Identity, local time,
   socials, back-to-top.
───────────────────────────────────────────────── */
const Footer = () => {
  const time = useCairoTime();
  const reduce = useReducedMotion();

  return (
    <footer className="border-t hairline">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex flex-col gap-1">
          <img src="/generated/ak-logo.webp" className="footer-mark self-start" alt="Ahmed Karam" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint mt-2">
            © {new Date().getFullYear()} Ahmed Karam · Cairo, EG {time}
          </span>
        </div>

        <div className="flex w-full sm:w-auto items-center">
          <div className="flex items-center gap-1 -ml-[14px] sm:ml-0">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 inline-flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 inline-flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="w-11 h-11 inline-flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
          >
            <Mail size={16} />
          </a>
          </div>
          <span aria-hidden="true" className="hidden sm:block mx-4 h-4 w-px bg-[#2a2a2e]" />
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
            }
            aria-label="Back to top"
            className="min-h-11 ml-auto sm:ml-0 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-faint hover:text-paper transition-colors duration-300"
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

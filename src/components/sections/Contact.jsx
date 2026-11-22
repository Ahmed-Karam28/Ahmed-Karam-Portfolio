import React from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';

/* ─────────────────────────────────────────────────
   Contact · one clear invitation. Oversized mailto,
   then every channel in a ruled list.
───────────────────────────────────────────────── */
const CHANNELS = [
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: Mail },
  { label: 'GitHub', value: 'Ahmed-Karam28', href: personalInfo.github, Icon: Github },
  { label: 'LinkedIn', value: 'ahmed-karam-emara', href: personalInfo.linkedin, Icon: Linkedin },
  { label: 'Résumé', value: 'PDF · download', href: personalInfo.cvPath, Icon: Download, download: true },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t hairline">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 md:pt-32 pb-28">
        <Reveal>
          <span className="eyebrow block mb-4">05 · Contact</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="display text-[clamp(2.4rem,6vw,5rem)] mb-6">
            Have a role worth<br />
            <span className="font-serif italic font-normal text-goldbright">talking about?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-base md:text-lg text-muted leading-relaxed font-light max-w-xl mb-14">
            For engineering opportunities or questions about my work,
            get in touch. My resume and project details are below.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-4 md:gap-6 border-y hairline py-7 md:py-9 w-full"
          >
            <span className="font-serif italic text-[clamp(1.5rem,4.5vw,3.4rem)] text-paper group-hover:text-goldbright transition-colors duration-300 break-all">
              {personalInfo.email}
            </span>
            <ArrowUpRight
              size={30}
              className="shrink-0 text-faint group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
            />
          </a>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-x-12">
          {CHANNELS.map(({ label, value, href, Icon, download }) => (
            <Reveal key={label}>
              <a
                href={href}
                download={download || undefined}
                target={!download && href.startsWith('http') ? '_blank' : undefined}
                rel={!download && href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 py-4 border-b hairline"
              >
                <span className="flex items-center gap-3">
                  <Icon size={15} className="text-faint group-hover:text-gold transition-colors duration-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    {label}
                  </span>
                </span>
                <span className="u-link text-[13px] text-paper">{value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

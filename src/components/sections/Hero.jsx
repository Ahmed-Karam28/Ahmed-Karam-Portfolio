import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';

const STATS = [
  { value: '3.3/4.0', label: 'GPA · B.Sc. Software Engineering, ECU' },
  { value: '08', label: 'Projects in this portfolio' },
  { value: 'DEPI', label: 'National scholarship · Software Testing' },
  { value: '2023', label: 'Engineering at ECU since' },
];

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─────────────────────────────────────────────────
   Hero · editorial masthead. Oversized statement
   type, framed portrait, fact strip.
───────────────────────────────────────────────── */
const Hero = () => {
  const reduce = useReducedMotion();
  const M = reduce ? 'div' : motion.div;

  return (
    <section id="home" className="relative">
      <div className="max-w-[1200px] mx-auto px-6 pt-32 md:pt-40 pb-16 min-h-screen flex flex-col justify-center">

        {/* Masthead rule */}
        <M
          {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 0 })}
          className="flex items-center justify-between border-t hairline pt-4 mb-10 md:mb-14"
        >
          <span className="eyebrow">Portfolio · 2026</span>
          <span className="eyebrow hidden sm:block">30.0444° N, 31.2357° E</span>
        </M>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end">

          {/* Statement */}
          <div className="lg:col-span-8">
            <M
              {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 1 })}
              className="inline-flex items-center gap-2.5 border hairline rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Full-stack & systems engineering
              </span>
            </M>

            <h1 className="display text-[clamp(2.6rem,7.2vw,5.9rem)]">
              <M {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 2 })} className="block">
                Building scalable
              </M>
              <M {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 3 })} className="block">
                web apps <span className="font-serif italic font-normal text-goldbright">&amp; the</span>
              </M>
              <M {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 4 })} className="block">
                <span className="font-serif italic font-normal text-goldbright">infrastructure</span> behind them.
              </M>
            </h1>

            <M
              {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 5 })}
              className="mt-8 max-w-xl"
            >
              <p className="text-pretty text-base md:text-lg text-muted leading-relaxed font-light">
                Ahmed Karam · Software Engineering student at ECU, Cairo. Full-stack
                development with Next.js &amp; React, grounded in Linux, networking
                and Docker. From web interfaces to the systems behind them.
              </p>
            </M>

            {/* Actions */}
            <M
              {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 6 })}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-paper text-ink px-6 h-12 font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-goldbright transition-colors duration-300"
              >
                Selected work
                <ArrowDown size={14} />
              </a>
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-2 border hairline text-paper px-6 h-12 font-mono text-[12px] uppercase tracking-[0.18em] hover:border-gold/60 hover:text-goldbright transition-colors duration-300"
              >
                Résumé
                <Download size={14} />
              </a>
              <div className="flex items-center gap-1 ml-1">
                {[
                  { href: personalInfo.github, label: 'GitHub', Icon: Github },
                  { href: personalInfo.linkedin, label: 'LinkedIn', Icon: Linkedin },
                  { href: `mailto:${personalInfo.email}`, label: 'Email', Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-11 h-11 inline-flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </M>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-4">
            <M
              {...(reduce ? {} : { variants: rise, initial: 'hidden', animate: 'show', custom: 5 })}
              className="frame max-w-[320px] lg:max-w-none"
            >
              <img
                src={personalInfo.profileImage}
                alt="Portrait of Ahmed Karam"
                width="640"
                height="800"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="flex items-center justify-between px-3 py-2.5 border-t hairline bg-panel">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Ahmed Karam
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Cairo, EG
                </span>
              </div>
            </M>
          </div>
        </div>

        {/* Fact strip */}
        <Reveal delay={0.15} className="mt-16 md:mt-20">
          <dl className="grid grid-cols-2 md:grid-cols-4 border-t hairline">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`pt-5 pb-1 pr-6 ${i !== 0 ? 'md:border-l hairline md:pl-6' : ''}`}
              >
                <dt className="order-2 text-[11px] text-faint leading-snug mt-2">{s.label}</dt>
                <dd className="order-1 font-serif text-3xl md:text-4xl text-paper">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

      </div>
    </section>
  );
};

export default Hero;

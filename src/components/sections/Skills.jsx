import React from 'react';
import { bentoSkillDomains, techStackRibbon } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import Marquee from '../ui/Marquee';

/* ─────────────────────────────────────────────────
   Capabilities · four domains as ruled index rows,
   then a slow toolset ribbon.
───────────────────────────────────────────────── */
const Skills = () => {
  return (
    <section id="expertise" className="scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 md:pt-32 pb-20">
        <Reveal>
          <span className="eyebrow block mb-4">02 · Capabilities</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mb-12 md:mb-16">
            What I <span className="font-serif italic font-normal text-goldbright">bring.</span>
          </h2>
        </Reveal>

        <div className="border-t hairline">
          {bentoSkillDomains.map((domain) => (
            <Reveal key={domain.id}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-b hairline group">
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-faint group-hover:text-gold transition-colors duration-300">
                    {domain.number}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl md:text-3xl text-paper leading-tight">
                    {domain.title}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mt-2">
                    {domain.subtitle}
                  </p>
                </div>
                <div className="md:col-span-6 flex flex-col gap-5">
                  <p className="text-sm text-muted leading-relaxed font-light">
                    {domain.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {domain.tools.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Toolset ribbon */}
      <div className="border-y hairline py-5">
        <Marquee items={techStackRibbon} />
      </div>
    </section>
  );
};

export default Skills;

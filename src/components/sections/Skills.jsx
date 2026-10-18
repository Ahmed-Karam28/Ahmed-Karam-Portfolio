import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bentoSkillDomains, techStackRibbon } from '../../data/portfolioData';
import SpotlightCard from '../ui/SpotlightCard';
import ScrollReveal from '../ui/ScrollReveal';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─────────────────────────────────────────────────
   Skills Section — Categorized Domain Competencies
───────────────────────────────────────────────── */
const Skills = () => {
  const container = React.useRef(null);

  useGSAP(() => {
    gsap.from('.skill-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="py-24 sm:py-28 border-t border-white/[0.04] relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="section-label">02 // Domain Competencies</span>
          <ScrollReveal
            baseOpacity={0}
            blurStrength={8}
            containerClassName="leading-none"
            textClassName="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-300 to-neutral-700 uppercase"
          >
            Technical Competencies
          </ScrollReveal>
          <p className="text-neutral-500 max-w-2xl text-sm sm:text-base leading-relaxed mt-1">
            Categorized skills across Linux administration, enterprise networking, automation, systems engineering, and quality operations.
          </p>
        </div>

        {/* ── 2x2 Bento Grid for Skill Domains ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {bentoSkillDomains.map((domain) => (
            <SpotlightCard
              key={domain.id}
              spotlightColor="rgba(255, 255, 255, 0.05)"
              className="skill-card flex flex-col justify-between gap-6 p-8 border border-neutral-800 bg-[#0c0c0c] rounded-3xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="section-label">{domain.number} // {domain.title.toUpperCase()}</span>
                  <span className="text-neutral-700 font-mono text-sm">+</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{domain.title}</h3>
                  <p className="text-xs text-neutral-500 mt-1 font-mono">{domain.subtitle}</p>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {domain.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-5 border-t border-white/[0.06]">
                <span className="section-label">Tools &amp; Methodologies</span>
                <div className="flex flex-wrap gap-2">
                  {domain.tools.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* ── Unified Engineering Toolset Ribbon ── */}
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.03)"
          className="skill-card p-8 border border-neutral-800 bg-[#0c0c0c] rounded-3xl"
        >
          <div className="flex flex-col gap-4">
            <span className="section-label">UNIFIED ENGINEERING TOOLSET</span>
            <div className="flex flex-wrap gap-2">
              {techStackRibbon.map((tech) => (
                <span key={tech} className="tag-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};

export default Skills;


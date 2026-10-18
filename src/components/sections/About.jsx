import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Server } from 'lucide-react';
import { aboutMeBio } from '../../data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';
import SpotlightCard from '../ui/SpotlightCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─────────────────────────────────────────────────
   About Me Section — Story of Transition to DevOps & Infrastructure
───────────────────────────────────────────────── */
const About = () => {
  const container = React.useRef(null);

  useGSAP(() => {
    gsap.from('.about-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-24 sm:py-28 border-t border-white/[0.04] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="section-label">01 // Engineering Identity</span>
          <ScrollReveal
            baseOpacity={0}
            blurStrength={8}
            containerClassName="leading-none"
            textClassName="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-300 to-neutral-700 uppercase"
          >
            About Me
          </ScrollReveal>
          <p className="text-neutral-500 max-w-2xl text-sm sm:text-base leading-relaxed mt-1">
            Bridging software engineering discipline with Linux administration, network architecture, and system automation.
          </p>
        </div>

        {/* 2-Paragraph Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Paragraph 1: The Transition */}
          <SpotlightCard
            spotlightColor="rgba(255,255,255,0.04)"
            className="about-card lg:col-span-6 flex flex-col justify-between p-8 md:p-10 border border-neutral-800 bg-[#0c0c0c] rounded-3xl"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="section-label">FULL-STACK FOCUS</span>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                  <Terminal size={18} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Full-Stack Development Focus</h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {aboutMeBio.paragraph1}
              </p>
            </div>
            <div className="pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Next.js &bull; React &bull; Tailwind CSS &bull; GSAP
            </div>
          </SpotlightCard>

          {/* Paragraph 2: System Operations & Infrastructure Focus */}
          <SpotlightCard
            spotlightColor="rgba(255,255,255,0.04)"
            className="about-card lg:col-span-6 flex flex-col justify-between p-8 md:p-10 border border-neutral-800 bg-[#0c0c0c] rounded-3xl"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="section-label">SYSTEMS &amp; AUTOMATION FOCUS</span>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                  <Server size={18} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Linux Systems &amp; Network Operations</h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {aboutMeBio.paragraph2}
              </p>
            </div>
            <div className="pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Ubuntu CLI &bull; Headless Linux &bull; VLANs &bull; OSPF Routing &bull; Bash
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};

export default About;

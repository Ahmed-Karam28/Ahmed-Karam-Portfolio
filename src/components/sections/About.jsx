import React from 'react';
import { aboutMeBio, personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';

/* ─────────────────────────────────────────────────
   About · the person behind the record. Portrait,
   bio in two movements, quick facts.
───────────────────────────────────────────────── */
const FACTS = [
  { k: 'Base', v: 'Cairo, Egypt' },
  { k: 'Study', v: 'B.Sc. Software Engineering, ECU' },
  { k: 'Focus', v: 'Full-stack web, Linux & infrastructure' },
  { k: 'English', v: 'C2 Proficient · EF SET' },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 border-t hairline">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 md:pt-32 pb-24">
        <Reveal>
          <span className="eyebrow block mb-4">04 · About</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mb-12 md:mb-16">
            Engineer by training,<br />
            <span className="font-serif italic font-normal text-goldbright">builder by habit.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Portrait + facts */}
          <Reveal className="lg:col-span-4">
            <div className="frame">
              <img
                src={personalInfo.profileImage}
                alt="Ahmed Karam"
                loading="lazy"
                decoding="async"
                width="640"
                height="800"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <dl className="mt-8 border-t hairline">
              {FACTS.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-6 py-3.5 border-b hairline">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint shrink-0">
                    {f.k}
                  </dt>
                  <dd className="text-[13px] text-paper text-right">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Bio */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-12">
            <Reveal delay={0.1}>
              <p className="font-serif text-2xl md:text-[2rem] leading-[1.35] text-paper">
                I build highly interactive, accessible and performant web
                applications ·{' '}
                <span className="italic text-goldbright">and I run the systems they live on.</span>
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <Reveal delay={0.15}>
                <div>
                  <span className="eyebrow block mb-4">The craft</span>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    {aboutMeBio.paragraph1}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <span className="eyebrow block mb-4">The operations</span>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    {aboutMeBio.paragraph2}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

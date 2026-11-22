import React from 'react';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { experienceTimeline, scholarship, certifications, education } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';

/* ─────────────────────────────────────────────────
   Experience · education, scholarship and freelance
   record as a ruled ledger, followed by verifiable
   certifications.
───────────────────────────────────────────────── */
const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 md:pt-32 pb-20">
        <Reveal>
          <span className="eyebrow block mb-4">03 · Experience &amp; education</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mb-12 md:mb-16">
            The <span className="font-serif italic font-normal text-goldbright">record.</span>
          </h2>
        </Reveal>

        {/* Ledger */}
        <div className="border-t hairline mb-16">
          {experienceTimeline.map((item) => (
            <Reveal key={`${item.title.includes('DEPI') ? 'Scholarship' : item.period}-${item.title}`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-8 border-b hairline group">
                <div className="md:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint flex items-center gap-2">
                    {item.active && !item.title.includes('DEPI') && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" aria-hidden="true" />
                    )}
                    {item.title.includes('DEPI') ? 'Scholarship' : item.period}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-xl md:text-2xl text-paper leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint mt-1.5">
                    {item.org}
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3">
                  <p className="text-[13px] text-muted leading-relaxed font-light">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* DEPI scholarship */}
          <Reveal className="lg:col-span-5">
            <div className="frame bg-panel p-7 md:p-9">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="eyebrow">Ministry scholarship</span>
                <BadgeCheck size={16} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-paper leading-tight mb-2">
                {scholarship.title}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint mb-5">
                {scholarship.provider}
              </p>
              <p className="text-sm text-muted leading-relaxed font-light mb-7">
                {scholarship.description}
              </p>
              <ul className="grid grid-cols-1 gap-2.5 border-t hairline pt-5">
                {scholarship.modules.map((m) => (
                  <li key={m} className="flex gap-3 text-[13px] text-muted/90">
                    <span className="text-gold select-none">·</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Certifications */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-baseline justify-between mb-2">
                <span className="eyebrow">Certifications</span>
                <span className="font-mono text-[11px] text-faint">
                  {education.degree} · {education.institution}
                </span>
              </div>
            </Reveal>
            <div className="border-t hairline">
              {certifications.map((cert) => (
                <Reveal key={cert.title}>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline py-5 border-b hairline">
                    <div className="sm:col-span-7">
                      <h4 className="text-[15px] text-paper leading-snug">{cert.title}</h4>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint mt-1">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <div className="sm:col-span-5 flex items-center sm:justify-end gap-5">
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-paper transition-colors"
                      >
                        Certificate
                        <ArrowUpRight size={12} />
                      </a>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="u-link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-goldbright"
                        >
                          Verify
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

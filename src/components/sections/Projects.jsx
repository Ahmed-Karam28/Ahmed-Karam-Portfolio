import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';

/* ─────────────────────────────────────────────────
   Projects · the case index. Editorial alternating
   rows: large framed capture, then the record ·
   what it is, what was built, what it runs on.
───────────────────────────────────────────────── */

const ProjectImage = ({ project }) => {
  if (!project.image) {
    return (
      <div className="frame aspect-[16/10] bg-panel flex flex-col items-center justify-center gap-3 select-none">
        <span className="font-serif italic text-6xl md:text-7xl text-gold/70">{project.number}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint px-6 text-center">
          {project.category}
        </span>
      </div>
    );
  }
  return (
    <div className="frame overflow-hidden group">
      <img
        src={project.image}
        alt={`${project.title} · interface capture`}
        loading="lazy"
        decoding="async"
        className="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    </div>
  );
};

const ProjectRow = ({ project, flip }) => (
  <Reveal>
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-14 md:py-20 border-t hairline">
      {/* Capture */}
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <ProjectImage project={project} />
      </div>

      {/* Record */}
      <div className={`lg:col-span-5 flex flex-col ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-baseline justify-between gap-4 mb-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            {project.number} · {project.category}
          </span>
          <span className="font-mono text-[11px] text-gold/80 whitespace-nowrap">
            {project.badge}
          </span>
        </div>

        <h3 className="font-serif text-3xl md:text-[2.6rem] leading-[1.05] text-paper mb-4">
          {project.title}
        </h3>

        <p className="text-sm md:text-[15px] text-muted leading-relaxed font-light mb-6">
          {project.description}
        </p>

        <details className="project-details mb-7"><summary className="font-mono text-xs uppercase tracking-widest text-goldbright cursor-pointer py-3">Implementation &amp; captures</summary><ul className="space-y-2.5 mt-4 mb-6">
          {project.implementation.slice(0, 4).map((item) => (
            <li key={item} className="flex gap-3 text-[13px] text-muted/90 leading-relaxed">
              <span className="text-gold mt-px select-none">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {project.images.length > 1 && <div className="space-y-5">{project.images.map(image => <figure key={image.src}><img src={image.src} alt={image.caption} loading="lazy" decoding="async" className="w-full h-auto border hairline" /><figcaption className="font-mono text-xs mt-2 text-muted">{image.caption}</figcaption></figure>)}</div>}
        </details>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-5 border-t hairline">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-goldbright"
            >
              Live site
              <ArrowUpRight size={13} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="u-link inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-paper transition-colors"
            >
              Source
              <ArrowUpRight size={13} />
            </a>
          )}
          <div className="ml-auto flex items-center gap-5">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{m.label}</div>
                <div className="text-xs text-paper mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  </Reveal>
);

const Projects = () => {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 md:pt-32 pb-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-4 md:mb-8">
            <div>
              <span className="eyebrow block mb-4">01 · Selected work</span>
              <h2 className="display text-[clamp(2.2rem,5vw,4rem)]">
                Selected <span className="font-serif italic font-normal text-goldbright">engineering.</span>
              </h2>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint pb-2">
              {String(projects.length).padStart(2, '0')} projects · 2024/26
            </span>
          </div>
        </Reveal>

        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

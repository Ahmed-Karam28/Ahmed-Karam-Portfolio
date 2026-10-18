import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../ui/ScrollReveal';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─────────────────────────────────────────────────
   Helper to standardize single vs multiple images
───────────────────────────────────────────────── */
const normalizeImages = (project) => {
  if (project.images && Array.isArray(project.images) && project.images.length > 0) {
    return project.images.map((img, i) =>
      typeof img === 'string'
        ? { src: img, caption: `${project.title} - Screenshot ${i + 1}` }
        : img
    );
  }
  if (project.image) {
    return [{ src: project.image, caption: project.title }];
  }
  return [];
};

/* ─────────────────────────────────────────────────
   Monochrome browser mockup with multi-image carousel
───────────────────────────────────────────────── */
const BrowserMockup = ({ project, onOpenLightbox }) => {
  const imageList = normalizeImages(project);
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = (e) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const activeImg = imageList[activeIdx] || null;

  return (
    <div className="rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#0a0a0a] flex flex-col shadow-xl group/mockup transition-all duration-300 hover:border-[#333]">
      {/* Window chrome */}
      <div className="bg-[#141414] border-b border-[#1f1f1f] px-4 py-2.5 flex items-center justify-between flex-shrink-0 select-none">
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#252525]" />
          ))}
        </div>
        <div className="flex-1 max-w-xs mx-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded-md px-3 py-0.5 text-[11px] font-mono text-neutral-400 truncate text-center flex items-center justify-center gap-1.5">
          <span>
            {project.liveLink
              ? project.liveLink.replace('https://', '')
              : `${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app`}
          </span>
          {imageList.length > 1 && (
            <span className="text-[10px] bg-white/10 text-neutral-300 px-1.5 py-0.2 rounded font-sans">
              {activeIdx + 1}/{imageList.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {imageList.length > 0 && (
            <button
              onClick={() => onOpenLightbox(project, activeIdx)}
              className="text-neutral-500 hover:text-white transition-colors p-1 rounded hover:bg-white/5"
              title="Expand Screenshot"
            >
              <Maximize2 size={13} />
            </button>
          )}
          <span className="text-neutral-700 font-mono text-xs">+</span>
        </div>
      </div>

      {/* Screenshot Container */}
      <div className="relative flex-1 overflow-hidden min-h-[220px] max-h-[360px] bg-[#0d0d0d] flex items-center justify-center group/img">
        {activeImg ? (
          <img
            key={activeImg.src}
            src={activeImg.src}
            alt={activeImg.caption || project.title}
            onClick={() => onOpenLightbox(project, activeIdx)}
            className="w-full h-full object-cover object-top grayscale opacity-85 group-hover/mockup:grayscale-0 group-hover/mockup:opacity-100 transition-all duration-700 cursor-zoom-in"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}

        {/* Fallback */}
        <div
          className={`${
            activeImg ? 'hidden' : 'flex'
          } absolute inset-0 items-center justify-center bg-[#0d0d0d] p-6 text-center`}
        >
          <div className="space-y-1.5">
            <p className="text-white text-sm font-semibold">{project.title}</p>
            <p className="text-neutral-600 text-xs font-mono">[Architecture Preview]</p>
          </div>
        </div>

        {/* Caption Overlay on Hover */}
        {activeImg?.caption && (
          <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/10 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5 shadow-lg">
            <ImageIcon size={11} className="text-neutral-400" />
            <span>{activeImg.caption}</span>
          </div>
        )}

        {/* Multiple Image Navigation Controls */}
        {imageList.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover/mockup:opacity-100 shadow-xl hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover/mockup:opacity-100 shadow-xl hover:scale-110 active:scale-95"
            >
              <ChevronRight size={16} />
            </button>

            {/* Bottom Dots / Pill Navigation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 border border-white/10 backdrop-blur-md px-2.5 py-1 rounded-full shadow-lg">
              {imageList.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx(i);
                  }}
                  aria-label={`Go to screenshot ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIdx ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Expand Overlay Button */}
        <button
          onClick={() => onOpenLightbox(project, activeIdx)}
          aria-label="Expand image"
          className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 opacity-0 group-hover/mockup:opacity-100 transition-all duration-300 shadow-lg hover:scale-105"
        >
          <Maximize2 size={11} />
          <span>Expand</span>
        </button>

        {/* Bottom subtle gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   Full-screen interactive Lightbox Modal
───────────────────────────────────────────────── */
const ProjectLightbox = ({ project, initialIndex = 0, onClose }) => {
  const imageList = normalizeImages(project);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  }, [imageList.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  }, [imageList.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, prevImage, nextImage]);

  if (!project || imageList.length === 0) return null;

  const currentImg = imageList[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col bg-black/95 backdrop-blur-2xl animate-fade-in text-white select-none overflow-y-auto"
      onClick={onClose}
    >
      {/* ── 1. ALWAYS-VISIBLE FIXED TOP-RIGHT FLOATING CLOSE BUTTON ── */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100000] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 hover:bg-white text-white hover:text-black border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Close photo preview"
        title="Close Preview (Esc)"
      >
        <span className="text-xs font-bold uppercase tracking-wider font-mono">Close</span>
        <X size={16} />
        <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">
          ESC
        </kbd>
      </button>

      {/* Top Bar Header */}
      <div
        className="w-full px-4 sm:px-6 py-3.5 border-b border-white/10 bg-neutral-950/90 flex items-center justify-between z-10 gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0 pr-24 sm:pr-32">
          <span className="section-label flex-shrink-0">{project.badge}</span>
          <h4 className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">{project.title}</h4>
          {imageList.length > 1 && (
            <span className="text-[11px] font-mono text-neutral-400 bg-white/10 px-2.5 py-0.5 rounded-full flex-shrink-0">
              {activeIndex + 1} / {imageList.length}
            </span>
          )}
        </div>
      </div>

      {/* Main Image View */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 select-none"
        onClick={onClose}
      >
        <div
          className="relative max-w-5xl max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── 2. FLOATING CLOSE BADGE ON TOP-RIGHT CORNER OF IMAGE ── */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-black font-bold flex items-center justify-center shadow-2xl hover:bg-neutral-200 hover:scale-110 active:scale-95 border-2 border-black transition-all cursor-pointer"
            title="Close image"
            aria-label="Close image"
          >
            <X size={16} />
          </button>

          <img
            src={currentImg.src}
            alt={currentImg.caption || project.title}
            className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Previous Button */}
        {imageList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl z-20 cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Next Button */}
        {imageList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 md:left-auto md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl z-20 cursor-pointer"
            aria-label="Next screenshot"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {/* Bottom Bar & Thumbnail Strip */}
      <div
        className="w-full px-4 sm:px-6 py-4 border-t border-white/10 bg-neutral-950/90 flex flex-col items-center gap-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {currentImg.caption && (
          <p className="text-xs font-mono text-neutral-300 text-center max-w-xl">
            {currentImg.caption}
          </p>
        )}

        {/* Mobile-friendly Close Pill at Bottom */}
        <button
          onClick={onClose}
          className="sm:hidden px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono flex items-center gap-1.5 active:scale-95 cursor-pointer"
        >
          <X size={13} />
          <span>Tap to Close</span>
        </button>

        {imageList.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
            {imageList.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-md overflow-hidden border transition-all ${
                  i === activeIndex
                    ? 'border-white scale-105 ring-2 ring-white/30'
                    : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                }`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   Individual project card (alternating 2-column)
───────────────────────────────────────────────── */
const ProjectCard = ({ project, index, onOpenLightbox }) => {
  const imageLeft = index % 2 !== 0;

  return (
    <div className="project-card group matte-card p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* ── Text column (col-span-5) ── */}
        <div className={`lg:col-span-5 flex flex-col gap-4 ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* Supertitle + badge */}
          <div className="flex flex-col gap-1">
            <span className="section-label">0{index + 1} // {project.category.toUpperCase()}</span>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="inline-flex items-center text-white font-semibold">
                {project.badge || 'Live'}
              </span>
              <span className="text-neutral-700">|</span>
              <span>{project.category}</span>
            </div>
          </div>

          {/* Title + description */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
          </div>

          {/* Key highlights (middot list) */}
          {project.implementation?.length > 0 && (
            <ul className="flex flex-col gap-1.5">
              {project.implementation.slice(0, 4).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                  <span className="text-neutral-600 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black font-bold text-xs rounded-xl hover:bg-neutral-100 transition-colors shadow-md"
              >
                View Live <ArrowUpRight size={13} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-transparent text-neutral-400 hover:text-white text-xs font-medium rounded-xl border border-[#1f1f1f] hover:border-[#333] hover:bg-[#111] transition-colors"
              >
                <Github size={13} /> Source Code
              </a>
            )}
          </div>
        </div>

        {/* ── Browser mockup column (col-span-7) ── */}
        <div className={`lg:col-span-7 ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <BrowserMockup project={project} onOpenLightbox={onOpenLightbox} />
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   Projects Section
───────────────────────────────────────────────── */
const Projects = () => {
  const container = React.useRef(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    project: null,
    initialIndex: 0,
  });

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, { scope: container });

  const handleOpenLightbox = (project, initialIndex = 0) => {
    setLightboxState({ isOpen: true, project, initialIndex });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ isOpen: false, project: null, initialIndex: 0 });
  };

  return (
    <section id="projects" ref={container} className="py-28 border-t border-white/[0.04] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3">
          <span className="section-label">02 // Featured Works</span>
          <ScrollReveal
            baseOpacity={0}
            blurStrength={8}
            containerClassName="leading-none"
            textClassName="text-4xl md:text-5xl text-white font-bold tracking-tighter uppercase"
          >
            Selected Works
          </ScrollReveal>
          <p className="text-neutral-500 max-w-2xl text-base leading-relaxed mt-1">
            Flagship platforms engineered for reliability, test automation, and measurable performance.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxState.isOpen && (
        <ProjectLightbox
          project={lightboxState.project}
          initialIndex={lightboxState.initialIndex}
          onClose={handleCloseLightbox}
        />
      )}
    </section>
  );
};

export default Projects;


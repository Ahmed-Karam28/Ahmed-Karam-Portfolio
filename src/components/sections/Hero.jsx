import React from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, GraduationCap, Award, Check } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import BlurText from '../ui/BlurText';
import Magnet from '../ui/Magnet';

/* ─────────────────────────────────────────────────
   Hero Section — Restored Clean UI Layout
───────────────────────────────────────────────── */
const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative z-10 pt-28 sm:pt-36 md:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
    >
      {/* Ambient Top-Center Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-[#0a0a0a] to-[#0a0a0a] blur-3xl opacity-80"></div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Left: identity + headline + actions ── */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* Profile avatar & Integrated Super-title */}
          <div className="flex flex-col">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/[0.05] overflow-hidden flex-shrink-0">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>

            <p className="text-[11px] font-medium text-neutral-400 tracking-[0.2em] uppercase mt-6 mb-4">
              AHMED KARAM
            </p>
          </div>

          {/* Main headline */}
          <div className="flex flex-col gap-2">
            <BlurText
              text="Building Scalable Web Applications & The Infrastructure Behind Them."
              animateBy="words"
              direction="top"
              delay={120}
              stepDuration={0.4}
              className="font-display antialiased text-balance text-white/95 text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-semibold tracking-[-0.035em] sm:tracking-[-0.04em] leading-[1.1] sm:leading-[1.02] max-w-2xl pb-2"
            />

            {/* Description Paragraph */}
            <div className="flex flex-col mt-4 sm:mt-5">
              <p className="text-pretty text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl font-light">
                Software Engineering student focused on full-stack systems, modern web architecture, and reliable infrastructure — building products designed to scale.
              </p>
            </div>
          </div>

          {/* ── CTAs ── */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-4 mt-10">
            
            <Magnet magnetStrength={10} padding={24} className="block sm:inline-block w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto h-[46px] px-6 rounded-md bg-white text-black text-[13px] font-medium inline-flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all duration-200 focus-ring cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowUpRight size={14} />
              </button>
            </Magnet>

            <Magnet magnetStrength={10} padding={24} className="block sm:inline-block w-full sm:w-auto">
              <a
                href={personalInfo.cvPath}
                download
                className="w-full sm:w-auto h-[46px] px-6 rounded-md bg-transparent border border-white/10 text-neutral-300 text-[13px] font-medium inline-flex items-center justify-center gap-2 hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-200 focus-ring"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </Magnet>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto mt-2 sm:mt-0 ml-0 sm:ml-2">
              <Magnet magnetStrength={12} padding={18}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[46px] w-[46px] rounded-full bg-transparent border border-white/10 text-neutral-400 inline-flex items-center justify-center hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-200 focus-ring flex-shrink-0"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </Magnet>

              <Magnet magnetStrength={12} padding={18}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[46px] w-[46px] rounded-full bg-transparent border border-white/10 text-neutral-400 inline-flex items-center justify-center hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-200 focus-ring flex-shrink-0"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </Magnet>

              <Magnet magnetStrength={12} padding={18}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="h-[46px] w-[46px] rounded-full bg-transparent border border-white/10 text-neutral-400 inline-flex items-center justify-center hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-200 focus-ring flex-shrink-0"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </Magnet>
            </div>
          </div>
        </div>

        {/* ── Right: Bento Grid Metrics & Status ── */}
        <div className="lg:col-span-5 flex flex-col justify-center w-full mt-6 lg:mt-0">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            
            {/* Item 1: GPA (col-span-2) */}
            <div className="col-span-2 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-3 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400">
                  Academic Performance
                </span>
                <GraduationCap size={16} className="text-neutral-400" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    3.3
                  </span>
                  <span className="text-neutral-500 font-light text-xl">
                    / 4.0
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 gap-0.5 mt-1">
                  <span className="font-medium text-neutral-300">Cumulative GPA</span>
                  <span className="text-neutral-500">B.Sc. Software Engineering · ECU</span>
                </div>
              </div>
            </div>

            {/* Item 2: DEPI Scholar (col-span-2) */}
            <div className="col-span-2 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-3 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-neutral-400" />
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    DEPI Scholar
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-white/70 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                  <Check size={12} strokeWidth={2.5} className="text-white/70" />
                  <span>Completed</span>
                </div>
              </div>
              <div className="flex flex-col text-xs gap-0.5">
                <span className="font-medium text-neutral-300">Software Testing Track</span>
                <span className="text-neutral-500">Ministry of Communications &amp; IT</span>
              </div>
            </div>

            {/* Item 3: Projects (col-span-1) */}
            <div className="col-span-1 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-2 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                07+
              </span>
              <span className="text-xs text-neutral-400 font-medium leading-tight">
                Major Projects
              </span>
            </div>

            {/* Item 4: Delivery (col-span-1) */}
            <div className="col-span-1 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-2 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                100%
              </span>
              <span className="text-xs text-neutral-400 font-medium leading-tight">
                Delivery Success
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

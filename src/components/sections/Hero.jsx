import React from "react";
import { ArrowRight } from "lucide-react";
import {
  ReactIcon,
  NextjsIcon,
  LinuxIcon,
  PythonIcon,
  CppIcon,
} from "../ui/TechIcons";

const GRID_COLUMNS = ["30.3vw", "50.4vw", "70.4vw", "86.6vw"];

export default function Hero() {
  return (
    <section id="home" className="ref-hero">
      <div className="ref-hero-bg" aria-hidden="true">
        {GRID_COLUMNS.map((left) => (
          <span key={left} className="ref-grid-v" style={{ left }} />
        ))}
        <span className="ref-grid-h ref-grid-h--a" />
        <span className="ref-grid-h ref-grid-h--b" />
        <span className="ref-grid-h ref-grid-h--c" />
        <span className="ref-grid-circle" />
        <span className="ref-grid-cross ref-grid-cross--circle" />
        <span className="ref-grid-cross ref-grid-cross--base" />
        <span className="ref-grid-cross ref-grid-cross--m1" />
        <span className="ref-grid-cross ref-grid-cross--m2" />
      </div>
      <picture>
        <source
          media="(max-width: 1023px)"
          srcSet="/generated/architecture-hero-mobile.webp"
        />
        <img
          className="ref-hero-art"
          src="/generated/architecture-hero.webp"
          alt=""
          width="720"
          height="695"
          fetchPriority="high"
          draggable="false"
        />
      </picture>
      <div className="ref-hero-content">
        <div className="ref-intro">
          <img
            src="/generated/headshot-color.webp"
            alt="Ahmed Karam"
            width="200"
            height="200"
            fetchPriority="high"
          />
          <span className="ref-intro-divider" aria-hidden="true" />
          <div className="ref-intro-text">
            <p className="ref-intro-name">Ahmed Karam</p>
            <p className="ref-intro-role">Software Engineering Student</p>
          </div>
        </div>
        <h1 className="ref-headline">
          <span className="ref-headline-line">From interface</span>
          <span className="ref-headline-line ref-headline-line--second">
            to <em>implementation.</em>
          </span>
        </h1>
        <p className="ref-hero-body">
          I build scalable web applications with React and Next.js, and work
          with Linux systems, testing, and performance.
        </p>
        <div className="ref-actions">
          <a href="#work" className="ref-cta">
            Explore my work
            <ArrowRight size={20} aria-hidden="true" />
          </a>
          <span className="ref-actions-divider" aria-hidden="true" />
          <div className="ref-tech" role="list">
            <span role="listitem" title="React">
              <ReactIcon />
              <span className="sr-only">React</span>
            </span>
            <span role="listitem" title="Next.js">
              <NextjsIcon />
              <span className="sr-only">Next.js</span>
            </span>
            <span role="listitem" title="Linux">
              <LinuxIcon />
              <span className="sr-only">Linux</span>
            </span>
            <span role="listitem" title="Python">
              <PythonIcon />
              <span className="sr-only">Python</span>
            </span>
            <span role="listitem" title="C++">
              <CppIcon />
              <span className="sr-only">C++</span>
            </span>
          </div>
        </div>
      </div>
      <div className="ref-bottom">
        <p className="ref-scroll">
          <span aria-hidden="true" />
          Scroll to explore
        </p>
        <p className="ref-pager">
          <strong>01</strong>
          <span aria-hidden="true" />
          <em>04</em>
        </p>
      </div>
    </section>
  );
}

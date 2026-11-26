import React from "react";
import { ArrowRight } from "lucide-react";
import {
  ReactIcon,
  NextjsIcon,
  LinuxIcon,
  PythonIcon,
  CppIcon,
} from "../ui/TechIcons";

const TECH = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "Linux", Icon: LinuxIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "C++", Icon: CppIcon },
];
const REPEAT = [0, 1, 2, 3];

function TechGroup({ hidden }) {
  return (
    <ul className="ref-marquee-group" aria-hidden={hidden ? "true" : undefined}>
      {REPEAT.flatMap((r) =>
        TECH.map(({ name, Icon }) => (
          <li key={`${r}-${name}`}>
            <Icon />
            <span>{name}</span>
          </li>
        )),
      )}
    </ul>
  );
}

export default function Hero() {
  return (
    <section id="home" className="ref-hero">
      <div className="ref-hero-bg" aria-hidden="true" />
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
            <p className="ref-intro-role">Software Engineer</p>
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
        </div>
      </div>
      <div className="ref-marquee" aria-label="Technologies I work with">
        <div className="ref-marquee-track">
          <TechGroup />
          <TechGroup hidden />
        </div>
      </div>
      <div className="ref-bottom">
        <p className="ref-scroll">
          <span aria-hidden="true" />
          Scroll to explore
        </p>
      </div>
    </section>
  );
}

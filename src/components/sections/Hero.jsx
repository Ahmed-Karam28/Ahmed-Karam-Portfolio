import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="identity-hero section-shell">
      <div className="identity-top">
        <div className="identity-profile">
          <img
            src="/generated/headshot.webp"
            alt="Ahmed Karam headshot"
            width="80"
            height="80"
            fetchPriority="high"
          />
          <div>
            <p>Ahmed Karam</p>
            <span>Software Engineering student / ECU, Cairo</span>
          </div>
        </div>
        <span className="identity-edition">Portfolio / 2026</span>
      </div>
      <h1>
        Web interfaces.
        <br />
        <span>Systems thinking.</span>
      </h1>
      <div className="identity-bottom">
        <div>
          <div className="identity-actions">
            <a href="#work" className="identity-primary">
              Explore my work{" "}
              <span>
                <ArrowDownRight size={19} aria-hidden="true" />
              </span>
            </a>
            <a
              href={personalInfo.cvPath}
              download
              className="identity-secondary"
            >
              Download résumé <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="identity-context">
          <p>
            I build web applications with React and Next.js, and work with the
            Linux systems and automation behind them.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code &amp; experiments on GitHub{" "}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

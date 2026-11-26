import React from "react";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="about" className="about-section section-shell">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">05 / A little about me</span>
            <h2>
              Curiosity, beyond
              <br />
              the <em>interface.</em>
            </h2>
          </div>
          <a href={personalInfo.cvPath} download className="text-action">
            The full résumé <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
      <div className="about-layout">
        <Reveal>
          <p className="about-statement">
            I like understanding the whole path: what someone sees, how the
            application behaves, and what keeps it running.
          </p>
          <p className="about-description">
            I'm studying Software Engineering at the Egyptian Chinese University
            in Cairo. My projects span web interfaces, Arabic localization, test
            automation, Linux administration and robotics middleware.
          </p>
          <p className="about-description">
            That mix shapes how I approach a problem. I pay attention to the
            details people interact with, then follow the problem down through
            the services and systems behind it.
          </p>
        </Reveal>
        <Reveal>
          <figure className="about-portrait">
            <img
              src="/generated/profile.webp"
              alt="Portrait of Ahmed Karam"
              loading="lazy"
            />
            <figcaption>Cairo, Egypt</figcaption>
          </figure>
          <dl className="about-facts">
            <div>
              <dt>Based in</dt>
              <dd>Cairo, Egypt</dd>
            </div>
            <div>
              <dt>Studying</dt>
              <dd>
                Software Engineering
                <br />
                <span>Egyptian Chinese University</span>
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>
                English · C2 Proficient
                <br />
                <span>EF SET certification</span>
              </dd>
            </div>
            <div>
              <dt>Working across</dt>
              <dd>
                Web applications
                <br />
                <span>Linux / networks / automation</span>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

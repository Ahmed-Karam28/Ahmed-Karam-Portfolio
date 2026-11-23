import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  experienceTimeline,
  scholarship,
  certifications,
} from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="experience-section section-shell">
      <div className="experience-layout">
        <Reveal>
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / Experience &amp; education</span>
              <h2>
                Learning. <br />
                Building. <br />
                <em>Repeating.</em>
              </h2>
              <p className="experience-intro">
                A software engineering foundation, hands-on client work and a
                growing focus on quality and systems.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="experience-ledger">
          {experienceTimeline
            .filter((item) => !item.title.includes("Google IT"))
            .map((item) => (
              <Reveal key={item.title}>
                <article>
                  <div className="timeline-period">
                    <span className="timeline-dot" />
                    {item.period}
                    {item.status ? ` · ${item.status}` : ""}
                  </div>
                  <h3>{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-desc">{item.desc}</p>
                  {item.title.includes("DEPI") && (
                    <details className="scholarship-details">
                      <summary>
                        Training topics <PlusSign />
                      </summary>
                      <ul>
                        {scholarship.modules.map((module) => (
                          <li key={module}>{module}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              </Reveal>
            ))}
        </div>
      </div>
      <div className="credential-heading">
        <div>
          <span className="eyebrow">Selected credentials</span>
          <h3>Always learning.</h3>
        </div>
        <span>
          {String(certifications.length).padStart(2, "0")} certificates
        </span>
      </div>
      <div className="credential-grid">
        {certifications.map((cert, index) => (
          <article className="credential-card" key={cert.title}>
            <span className="credential-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="credential-content">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}<span aria-hidden="true"> · </span>{cert.date}</p>
            </div>
            <div className="credential-links">
                <a href={cert.file} target="_blank" rel="noopener noreferrer">
                  View PDF <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only">
                    , {cert.title}, opens in new tab
                  </span>
                </a>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only">
                      , {cert.title}, opens in new tab
                    </span>
                  </a>
                )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function PlusSign() {
  return <span aria-hidden="true">+</span>;
}

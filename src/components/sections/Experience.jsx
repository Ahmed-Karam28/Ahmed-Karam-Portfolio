import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";
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
                    {item.title.includes("DEPI")
                      ? "National scholarship"
                      : item.period}
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
        <h3>Credentials, with the documents.</h3>
        <span>
          {String(certifications.length).padStart(2, "0")} certificates
        </span>
      </div>
      <div className="credential-grid">
        {certifications.map((cert) => (
          <article className="credential-card" key={cert.title}>
            <FileText size={20} strokeWidth={1.4} aria-hidden="true" />
            <div className="credential-content">
              <p>
                {cert.issuer} <span>/ {cert.date}</span>
              </p>
              <h4>{cert.title}</h4>
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

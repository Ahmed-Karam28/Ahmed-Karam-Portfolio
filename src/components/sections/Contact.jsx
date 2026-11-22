import React, { useState } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <section id="contact" className="contact-section section-shell">
      <Reveal>
        <div className="contact-panel">
          <span className="eyebrow">05 / Start a conversation</span>
          <div className="contact-heading">
            <h2>
              A project or role
              <br />
              <em>in mind?</em>
            </h2>
            <p>
              For engineering opportunities or a conversation about my work,
              email is the best place to start.
            </p>
          </div>
          <div className="contact-email">
            <a href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
              <ArrowUpRight size={25} aria-hidden="true" />
            </a>
            <button
              className="icon-button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
              <span className="copy-label">
                {copied ? "Copied" : "Copy email"}
              </span>
            </button>
          </div>
          <span className="copy-status" role="status">
            {copied
              ? "Email address copied."
              : copyError
                ? "Copy is unavailable. Select the email address or open the email link."
                : ""}
          </span>
          <div className="contact-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} aria-hidden="true" />
              <span>GitHub</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} aria-hidden="true" />
              <span>LinkedIn</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href={personalInfo.cvPath} download>
              <Download size={16} aria-hidden="true" />
              <span>Résumé / PDF</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

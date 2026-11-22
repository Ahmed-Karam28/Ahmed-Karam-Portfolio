import React, { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
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
      setCopied(false);
      setCopyError(true);
    }
  };
  return (
    <section id="contact" className="contact-section section-shell">
      <Reveal>
        <div className="contact-panel">
          <span className="eyebrow">05 / Contact</span>
          <div className="contact-heading">
            <h2>A project or role<br /><em>in mind?</em></h2>
            <p>For engineering opportunities or a conversation about my work, email is the best place to start.</p>
          </div>
          <div className="contact-email">
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}<ArrowUpRight size={24} aria-hidden="true" /></a>
            <button
              type="button"
              className="contact-copy"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              title={copied ? "Email copied" : "Copy email address"}
              data-copied={copied}
            >
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            </button>
          </div>
          <div className="contact-bottom">
            <span className="copy-status" role="status">
              {copied ? "Email address copied." : copyError ? "Copy is unavailable. Select the email address or open the email link." : ""}
            </span>
            <div className="contact-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={personalInfo.cvPath} download>Résumé / PDF<ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

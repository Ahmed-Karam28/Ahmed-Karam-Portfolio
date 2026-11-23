import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Github, Linkedin, FileDown } from "lucide-react";
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
          <div className="contact-layout">
            <div className="contact-intro">
              <div className="contact-heading">
                <h2>Let's build<br />what's next.</h2>
                <p>Have a role or project in mind? Get in touch, explore my code, or take a closer look at my experience.</p>
              </div>
              <span className="contact-email-label">Start a conversation</span>
              <div className="contact-email">
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}<ArrowUpRight size={20} aria-hidden="true" /></a>
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
              <span className="copy-status" role="status">
                {copied ? "Email address copied." : copyError ? "Copy is unavailable. Select the email address or open the email link." : ""}
              </span>
            </div>
            <div className="contact-links" aria-label="Explore my work and experience">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github size={23} aria-hidden="true" />
                <span><strong>GitHub</strong><small>Explore the code</small></span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={23} aria-hidden="true" />
                <span><strong>LinkedIn</strong><small>Connect with me</small></span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a href={personalInfo.cvPath} download>
                <FileDown size={23} aria-hidden="true" />
                <span><strong>Résumé</strong><small>Download PDF</small></span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

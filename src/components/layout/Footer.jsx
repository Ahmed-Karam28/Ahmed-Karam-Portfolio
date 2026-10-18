import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => (
  <footer className="py-14 border-t border-white/[0.04] bg-[#0a0a0a] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/[0.04]">

        {/* Brand */}
        <div>
          <p className="font-bold text-lg text-white tracking-tight">
            AHMED <span className="text-neutral-600 font-normal">KARAM</span>
          </p>
          <p className="text-xs text-neutral-600 mt-1 max-w-xs leading-relaxed">
            Software Quality Assurance, Security Engineering &amp; Full‑Stack Development
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2.5">
          {[
            { href: personalInfo.github, icon: <Github size={15} />, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: <Linkedin size={15} />, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={15} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2.5 rounded-full border border-neutral-800 bg-transparent text-neutral-500 hover:text-white hover:border-neutral-700 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-2 text-xs text-neutral-700">
        <span className="flex items-center gap-1.5">
          <MapPin size={12} className="text-neutral-600" />
          {personalInfo.location} &bull; {personalInfo.university}
        </span>
        <span>© {new Date().getFullYear()} Ahmed Karam. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;

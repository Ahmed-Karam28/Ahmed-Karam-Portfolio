import React, { useState } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, MapPin, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';
import SpotlightCard from '../ui/SpotlightCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/* ─────────────────────────────────────────────────
   Contact Section
───────────────────────────────────────────────── */
const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 border-t border-white/[0.04] relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3">
          <span className="section-label">03 // Direct Engagement</span>
          <ScrollReveal
            baseOpacity={0}
            blurStrength={8}
            containerClassName="leading-none"
            textClassName="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-300 to-neutral-700"
          >
            Let's Connect
          </ScrollReveal>
          <p className="text-neutral-500 max-w-2xl text-base leading-relaxed mt-1">
            Open to software quality engineering roles, security audits, penetration testing initiatives, and full‑stack development.
          </p>
        </div>

        {/* ── Two-column bento ── */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">

          {/* Left card: Direct channel */}
          <SpotlightCard
            spotlightColor="rgba(255,255,255,0.04)"
            className="lg:col-span-7 flex flex-col justify-between gap-8 sm:gap-10 p-6 sm:p-8 md:p-10"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
              className="flex flex-col justify-between h-full gap-8"
            >
              <div className="flex flex-col gap-5">
                <motion.span variants={itemVariants} className="section-label">
                  Primary Contact Channel
                </motion.span>

                {/* Responsive interactive email */}
                <motion.button
                  variants={itemVariants}
                  onClick={handleCopy}
                  className="group text-left w-full min-w-0"
                  title="Click to copy"
                >
                  <div className="flex items-center justify-between gap-2 sm:gap-3 overflow-hidden w-full">
                    <span className="min-w-0 truncate text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                      {personalInfo.email}
                    </span>

                    {/* Animated Copy Icon Crossfade */}
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        >
                          <Check size={16} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-neutral-500 group-hover:text-white transition-colors"
                        >
                          <Copy size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Animated Status Text */}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={copied ? 'copied' : 'uncopied'}
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-xs font-mono mt-2 transition-colors ${
                        copied ? 'text-emerald-400 font-medium' : 'text-neutral-600'
                      }`}
                    >
                      {copied ? 'Copied to clipboard' : 'Click to copy'}
                    </motion.p>
                  </AnimatePresence>
                </motion.button>

                <motion.p variants={itemVariants} className="text-sm text-neutral-500 leading-relaxed">
                  Primary endpoint for formal inquiries, technical recruitment, and project engagements.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/[0.05]">
                <a
                  href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry`}
                  className="btn-primary focus-ring"
                >
                  Compose Email <ArrowUpRight size={14} />
                </a>
                <a
                  href={personalInfo.cvPath}
                  download
                  className="btn-ghost focus-ring"
                >
                  <Download size={14} /> Curriculum Vitae
                </a>
              </motion.div>
            </motion.div>
          </SpotlightCard>

          {/* Right card: Networks & location */}
          <SpotlightCard
            spotlightColor="rgba(255,255,255,0.04)"
            className="lg:col-span-5 flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={containerVariants}
              className="flex flex-col justify-between h-full gap-8"
            >
              <div className="flex flex-col gap-4">
                <motion.span variants={itemVariants} className="section-label">
                  Base &amp; Profiles
                </motion.span>

                {/* Clean stacked location typography */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-neutral-500 flex-shrink-0" />
                    <span className="text-white font-medium">{personalInfo.location}</span>
                  </div>
                  <span className="hidden sm:inline text-neutral-600">•</span>
                  <span className="text-neutral-500">{personalInfo.university}</span>
                </motion.div>

                <motion.p variants={itemVariants} className="text-xs text-neutral-600 leading-relaxed">
                  Available for remote roles globally and on‑site positions across Egypt.
                </motion.p>
              </div>

              {/* Sleek full-width network pills */}
              <motion.div variants={itemVariants} className="flex flex-col gap-3 pt-6 border-t border-white/[0.05]">
                <span className="section-label mb-1">Verified Social Profiles</span>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-neutral-800 bg-transparent hover:bg-white/[0.03] hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Github size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-white">GitHub Profile</span>
                  </div>
                  <ArrowUpRight size={14} className="text-neutral-600 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-neutral-800 bg-transparent hover:bg-white/[0.03] hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-white">LinkedIn Network</span>
                  </div>
                  <ArrowUpRight size={14} className="text-neutral-600 group-hover:text-white transition-colors" />
                </a>
              </motion.div>
            </motion.div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};

export default Contact;


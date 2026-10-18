import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const menuVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const Navbar = ({ activeSection, scrolled, scrollProgress, scrollToSection }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Overview', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'skills' },
    { label: 'Work', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[1.5px] bg-transparent z-[100]">
        <div
          className="h-full bg-white/30 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.05] bg-[#0a0a0a]/80 backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Wordmark */}
          <button
            onClick={() => handleClick('home')}
            className="font-bold tracking-tight text-base text-white hover:text-neutral-200 transition-colors"
          >
            AHMED <span className="text-neutral-600 font-normal">KARAM</span>
          </button>

          {/* Desktop pill nav */}
          <div className="hidden md:flex items-center gap-0.5 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] backdrop-blur-md">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  activeSection === id
                    ? 'text-white bg-white/[0.07]'
                    : 'text-neutral-500 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-neutral-100 transition-colors focus-ring"
          >
            Get in Touch <ArrowUpRight size={13} />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors focus-ring rounded-full border border-white/10 bg-white/[0.03]"
            aria-label="Open mobile menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* ── Fluid Mobile Menu Overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-2xl z-[100] flex flex-col justify-between p-8 sm:p-12 md:hidden"
          >
            {/* Top Header Row */}
            <div className="flex items-center justify-between">
              <span className="font-bold tracking-tight text-base text-white">
                AHMED <span className="text-neutral-600 font-normal">KARAM</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2.5 text-neutral-400 hover:text-white transition-colors focus-ring rounded-full border border-white/10 bg-white/[0.03]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Staggered Nav Links List */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-6 sm:gap-8 my-auto"
            >
              {navItems.map(({ label, id }, index) => (
                <motion.div key={id} variants={itemVariants}>
                  <button
                    onClick={() => handleClick(id)}
                    className={`text-left text-3xl sm:text-4xl font-medium tracking-tight transition-colors flex items-center ${
                      activeSection === id ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-xs text-neutral-600 mr-4">0{index + 1}</span>
                    {label}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Footer: Social Icons + Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]"
            >
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold bg-white text-black rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

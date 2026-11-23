import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ─────────────────────────────────────────────────
   Reveal · restrained scroll-in wrapper.
   Rises 24px and fades in once, when entering the
   viewport. Honours prefers-reduced-motion by
   rendering fully visible with no transform.
───────────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = '', as = 'div', y = 24 }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/* ─────────────────────────────────────────────────
   404 · same editorial voice as the site.
───────────────────────────────────────────────── */
const NotFound = () => {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-6">
      <div className="max-w-xl w-full">
        <span className="eyebrow block mb-6">Error · 404</span>
        <h1 className="display text-[clamp(3rem,10vw,6rem)] mb-6">
          Nothing <span className="font-serif italic font-normal text-goldbright">here.</span>
        </h1>
        <p className="text-muted text-base leading-relaxed font-light mb-10 max-w-md">
          The page you asked for does not exist, moved, or never did.
          The rest of the portfolio is one click away.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-paper text-ink px-6 h-12 font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-goldbright transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

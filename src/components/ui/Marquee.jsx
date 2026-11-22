import React from 'react';
export default function Marquee({ items }) {
  return <ul className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3" aria-label="Engineering tools">{items.map(item => <li key={item} className="font-mono text-xs text-muted">{item}</li>)}</ul>;
}

import React, { useEffect, useState } from "react";

const SECTIONS = ["home", "work", "expertise", "experience", "about", "contact"];
const pad = (n) => String(n).padStart(2, "0");

/* Live section counter. Same section order as the navigation
   (Overview + 5 sections), updated as the page scrolls. */
export default function SectionPager() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let queued = false;
    const update = () => {
      queued = false;
      const marker = window.innerHeight * 0.35;
      let current = 0;
      SECTIONS.forEach((id, i) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= marker) current = i;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40)
        current = SECTIONS.length - 1;
      setIndex(current);
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p className="ref-pager" aria-hidden="true" data-testid="section-pager">
      <strong key={index}>{pad(index + 1)}</strong>
      <span />
      <em>{pad(SECTIONS.length)}</em>
    </p>
  );
}

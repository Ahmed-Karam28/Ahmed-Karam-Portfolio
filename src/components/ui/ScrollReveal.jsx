import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0,
  scrollOpacity = 1,
  blurStrength = 8,
  containerClassName = '',
  textClassName = '',
  rotation = 0,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
          y: 25,
          rotate: rotation,
        },
        {
          opacity: scrollOpacity,
          filter: 'blur(0px)',
          y: 0,
          rotate: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            scroller: scrollContainerRef?.current || window,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [baseOpacity, scrollOpacity, enableBlur, blurStrength, rotation, scrollContainerRef]);

  return (
    <div ref={containerRef} className={`will-change-[transform,opacity,filter] ${containerClassName}`}>
      <span className={textClassName}>{children}</span>
    </div>
  );
};

export default ScrollReveal;

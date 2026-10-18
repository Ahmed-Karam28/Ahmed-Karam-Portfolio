import React, { useRef, useState, useEffect } from 'react';

const MagneticButton = ({ children, className = "", href, onClick, download }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      const strength = 0.25;
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const ButtonElement = href ? 'a' : 'button';
  const extraProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer", download }
    : { onClick };

  return (
    <ButtonElement
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={isTouchDevice ? {} : {
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      {...extraProps}
    >
      {children}
    </ButtonElement>
  );
};

export default MagneticButton;

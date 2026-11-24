import React from "react";

export default function AkMonogram({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 21 L16.5 2.5 L25.5 21" />
      <path d="M10.2 13.6 L19.8 13.6" />
      <path d="M21.8 11.2 L35 2.5" />
      <path d="M22.6 12.8 L36.5 21" />
    </svg>
  );
}

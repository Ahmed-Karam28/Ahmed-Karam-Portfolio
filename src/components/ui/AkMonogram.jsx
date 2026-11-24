import React from "react";

export default function AkMonogram({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 34 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.5 21 L15 3" />
      <path d="M20 3.5 L20 20.5" />
      <path d="M9.9 13.5 L23.5 13.5" />
      <path d="M20.5 12.5 L31.5 3" />
      <path d="M21.5 14.5 L32.5 20.5" />
    </svg>
  );
}

import React from "react";

export default function CircuitPattern() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.4 }}
    >
      <path
        d="M10 50 H200 V150 H400 V250 H600"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="200" cy="150" r="5" fill="#ffffff" />
      <circle cx="400" cy="250" r="5" fill="#ffffff" />
      <circle cx="600" cy="250" r="5" fill="#ffffff" />
    </svg>
  );
}

import React from "react";

export default function Cercle() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="circular-progressbar"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="circle-background"
        cx="12"
        cy="12"
        r="11"
        strokeWidth="2px"
      />
      <circle
        className="circle-progress"
        cx="12"
        cy="12"
        r="11"
        strokeWidth="2px"
        transform="rotate(-90 12 12)"
        style={{ strokeDasharray: 69.115, strokeDashoffset: 69.115 }}
      />
    </svg>
  );
}


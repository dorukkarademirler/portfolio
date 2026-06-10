import React from "react";

export default function GuitarSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 160 520"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {/* Headstock */}
      <rect x="58" y="8" width="44" height="52" rx="6" fill="currentColor" />
      {/* Tuning pegs left */}
      <circle cx="52" cy="22" r="5" fill="currentColor" />
      <circle cx="52" cy="38" r="5" fill="currentColor" />
      <circle cx="52" cy="54" r="5" fill="currentColor" />
      {/* Tuning pegs right */}
      <circle cx="108" cy="22" r="5" fill="currentColor" />
      <circle cx="108" cy="38" r="5" fill="currentColor" />
      <circle cx="108" cy="54" r="5" fill="currentColor" />
      {/* Tuning peg shafts left */}
      <line x1="52" y1="22" x2="58" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="52" y1="38" x2="58" y2="38" stroke="currentColor" strokeWidth="2" />
      <line x1="52" y1="54" x2="58" y2="54" stroke="currentColor" strokeWidth="2" />
      {/* Tuning peg shafts right */}
      <line x1="108" y1="22" x2="102" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="108" y1="38" x2="102" y2="38" stroke="currentColor" strokeWidth="2" />
      <line x1="108" y1="54" x2="102" y2="54" stroke="currentColor" strokeWidth="2" />
      {/* Nut */}
      <rect x="68" y="58" width="24" height="3" rx="1" fill="currentColor" />
      {/* Neck */}
      <path
        d="M 68 61 L 64 200 L 96 200 L 92 61 Z"
        fill="currentColor"
      />
      {/* Fret lines */}
      {[85, 105, 123, 140, 155, 170].map((y, i) => (
        <line
          key={i}
          x1={68 - i * 0.5}
          y1={y}
          x2={92 + i * 0.5}
          y2={y}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
      {/* Guitar body */}
      <path
        d="
          M 80 490
          C 148 490 152 430 152 400
          C 152 362 130 340 112 322
          C 136 308 142 278 142 252
          C 142 204 116 186 80 186
          C 44 186 18 204 18 252
          C 18 278 24 308 48 322
          C 30 340 8 362 8 400
          C 8 430 12 490 80 490
          Z
        "
        fill="currentColor"
      />
      {/* Sound hole */}
      <circle cx="80" cy="390" r="34" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="80" cy="390" r="28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Rosette ring detail */}
      <circle cx="80" cy="390" r="36" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      {/* Bridge */}
      <rect x="60" y="450" width="40" height="8" rx="2" fill="currentColor" opacity="0.8" />
      <rect x="56" y="456" width="48" height="3" rx="1" fill="currentColor" opacity="0.6" />
      {/* Strings */}
      {[-8, -5, -2, 2, 5, 8].map((offset, i) => (
        <line
          key={i}
          x1={80 + offset * 0.3}
          y1={62}
          x2={80 + offset}
          y2={454}
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.35"
        />
      ))}
      {/* Body highlight */}
      <path
        d="M 50 230 C 35 250 28 280 32 310 C 22 330 14 355 14 385"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

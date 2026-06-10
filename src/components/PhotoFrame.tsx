"use client";

export default function PhotoFrame() {
  return (
    <div className="relative w-64 h-72 sm:w-72 sm:h-80 shrink-0">

      {/* Spinning dashed ring */}
      <div
        className="absolute inset-0 rounded-full border border-dashed border-[var(--color-accent)] opacity-20"
        style={{ animation: "ring-spin 20s linear infinite" }}
      />
      {/* Static glow ring */}
      <div
        className="absolute inset-2 rounded-full border border-[var(--color-accent)] opacity-10"
        style={{ boxShadow: "0 0 40px rgba(0,229,255,0.15), 0 0 80px rgba(0,229,255,0.07)" }}
      />

      {/*
        The robot image has dark padding (~10%) on all sides.
        We scale both layers to 120% and offset by -10% to crop that padding.

        Layer 1 — body: full image MINUS the right-arm rectangle.
          Polygon cuts a notch from the right side between y=28%..72%, x=63%..100%

        Layer 2 — arm: only the right-arm rectangle (x=62%..100%, y=27%..73%).
          Rotates around the shoulder pivot at ~(67%, 37%) of the container.
      */}

      {/* Body layer */}
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 28%, 63% 28%, 63% 73%, 100% 73%, 100% 100%, 0% 100%)",
        }}
      >
        <RobotImg />
      </div>

      {/* Arm layer — waves from the shoulder */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(62% 27%, 100% 27%, 100% 74%, 62% 74%)",
          transformOrigin: "66% 37%",
          animation: "arm-wave 3s ease-in-out infinite",
        }}
      >
        <RobotImg />
      </div>

      <style>{`
        @keyframes ring-spin {
          to { transform: rotate(360deg); }
        }

        /* Arm raises, waves twice, then returns to rest */
        @keyframes arm-wave {
          0%        { transform: rotate(0deg);   }
          15%       { transform: rotate(-55deg); }
          30%       { transform: rotate(-28deg); }
          45%       { transform: rotate(-55deg); }
          60%       { transform: rotate(-28deg); }
          75%, 100% { transform: rotate(0deg);   }
        }
      `}</style>
    </div>
  );
}

/* Shared image — scaled 120% and centred to crop the outer dark padding */
function RobotImg() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/robot.webp"
      alt=""
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "120%",
        height: "120%",
        top: "-10%",
        left: "-10%",
        objectFit: "contain",
        mixBlendMode: "screen",
      }}
    />
  );
}

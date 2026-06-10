const DARK = "#080f1c";
const MID  = "#185FA5";
const LITE = "#378ADD";
const GLOW = "rgba(55,138,221,0.65)";
const DIM  = "rgba(55,138,221,0.25)";

export default function Robot() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", userSelect: "none" }}>

      {/* ── Antenna ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: 10, height: 10, borderRadius: "50%",
          background: LITE,
          boxShadow: `0 0 8px ${LITE}, 0 0 18px ${GLOW}`,
        }} />
        <div style={{ width: 3, height: 13, background: MID }} />
      </div>

      {/* ── Head ── */}
      <div style={{
        width: 80, height: 62,
        background: DARK,
        border: `2px solid ${LITE}`,
        borderRadius: 10,
        boxShadow: `0 0 16px ${GLOW}, inset 0 0 10px ${DIM}`,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 8,
      }}>
        {/* Eyes */}
        <div style={{ display: "flex", gap: 14 }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              width: 16, height: 14, borderRadius: 3,
              background: LITE,
              boxShadow: `0 0 10px ${LITE}, 0 0 22px ${GLOW}`,
            }} />
          ))}
        </div>
        {/* Mouth grill */}
        <div style={{ display: "flex", gap: 5 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 8, height: 6, borderRadius: 2,
              background: MID,
            }} />
          ))}
        </div>
      </div>

      {/* ── Neck ── */}
      <div style={{
        width: 20, height: 7,
        background: MID,
        border: `1px solid ${LITE}`,
      }} />

      {/* ── Body row: left arm | torso | right arm ── */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Left arm (static) */}
        <Arm animated={false} side="left" />

        {/* Torso */}
        <div style={{
          width: 80, height: 76,
          background: DARK,
          border: `2px solid ${LITE}`,
          borderRadius: 6,
          boxShadow: `0 0 16px ${GLOW}, inset 0 0 10px ${DIM}`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Chest panel */}
          <div style={{
            width: 48, height: 40,
            background: MID,
            border: `2px solid ${LITE}`,
            borderRadius: 5,
            boxShadow: `0 0 10px ${GLOW}, inset 0 0 12px rgba(0,0,0,0.45)`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 6,
          }}>
            <div style={{
              width: 12, height: 12, borderRadius: "50%",
              background: LITE,
              boxShadow: `0 0 12px ${LITE}, 0 0 24px ${GLOW}`,
            }} />
            <div style={{ display: "flex", gap: 7 }}>
              {[0, 1].map(i => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: LITE,
                  boxShadow: `0 0 6px ${LITE}`,
                  opacity: i === 0 ? 1 : 0.45,
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Right arm (waving) */}
        <Arm animated={true} side="right" />
      </div>

      {/* ── Legs ── */}
      <div style={{ display: "flex", gap: 10, marginTop: 1 }}>
        {[0, 1].map(i => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: 26, height: 40,
              background: DARK,
              border: `2px solid ${LITE}`,
              borderRadius: "4px 4px 0 0",
              boxShadow: `0 0 8px ${DIM}`,
            }} />
            <div style={{
              width: 34, height: 14,
              background: DARK,
              border: `2px solid ${LITE}`,
              borderRadius: "0 0 8px 8px",
              marginTop: -1,
            }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes robot-wave {
          0%           { transform: rotate(0deg);    }
          18%          { transform: rotate(-150deg); }
          32%          { transform: rotate(-128deg); }
          46%          { transform: rotate(-150deg); }
          60%          { transform: rotate(-128deg); }
          74%          { transform: rotate(0deg);    }
          100%         { transform: rotate(0deg);    }
        }
      `}</style>
    </div>
  );
}

/* Shoulder ball + upper arm + hand as one rotatable unit */
function Arm({ animated, side }: { animated: boolean; side: "left" | "right" }) {
  return (
    <div style={{ paddingTop: 8, display: "flex", flexDirection: "column", alignItems: side === "left" ? "flex-end" : "flex-start" }}>
      {/* Fixed shoulder socket — sits against the torso edge */}
      <div style={{
        width: 13, height: 13, borderRadius: "50%",
        background: MID,
        border: `2px solid ${LITE}`,
        boxShadow: `0 0 8px ${GLOW}`,
        marginBottom: -6,
        position: "relative", zIndex: 2,
        ...(side === "left" ? { marginRight: -4 } : { marginLeft: -4 }),
      }} />

      {/* Arm + hand — rotates from the top (shoulder) */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        transformOrigin: "top center",
        ...(animated && { animation: "robot-wave 2.5s ease-in-out infinite" }),
      }}>
        <div style={{
          width: 18, height: 46,
          background: DARK,
          border: `2px solid ${LITE}`,
          borderRadius: 4,
          boxShadow: `0 0 6px ${DIM}`,
        }} />
        <div style={{
          width: 24, height: 10,
          background: MID,
          border: `1px solid ${LITE}`,
          borderRadius: 4,
          marginTop: -1,
        }} />
      </div>
    </div>
  );
}

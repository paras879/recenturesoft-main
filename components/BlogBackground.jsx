
const C = {
  primary: "#06E6FF",
  accent: "#8B5CF6",
};

export default function BlogBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Aurora gradient mesh */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: `radial-gradient(ellipse, ${C.primary}, transparent 70%)`, filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.025]"
        style={{ background: `radial-gradient(ellipse, ${C.accent}, transparent 70%)`, filter: "blur(80px)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${C.primary}15 1px, transparent 1px), linear-gradient(90deg, ${C.primary}15 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

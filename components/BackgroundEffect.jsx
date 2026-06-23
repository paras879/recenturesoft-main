


/**
 * BackgroundEffect – Moving grid overlay.
 * Removed particles to maximize visual performance and scrolling smoothness.
 */
export default function BackgroundEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Moving grid overlay — low opacity */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.15] animate-gridMove" />
    </div>
  );
}

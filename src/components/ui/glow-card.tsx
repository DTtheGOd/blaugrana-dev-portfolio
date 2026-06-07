import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * GlowCard — wraps any content in a card with glowing edges.
 * The glow is achieved via a pseudo-element conic-gradient border
 * + a subtle box-shadow on hover.
 *
 * Usage:
 *   <GlowCard color="#1A56DB" className="p-6">...</GlowCard>
 */

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The primary glow colour (hex/rgb/hsl). Defaults to brand blue. */
  color?: string;
  /** Intensity 0-1, controls opacity of the glow. Default 0.55 */
  intensity?: number;
  /** Extra blur spread in px. Default 18. */
  blur?: number;
}

const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ color = "#1A56DB", intensity = 0.55, blur = 18, className, style, children, ...props }, ref) => {
    const rgba = hexToRgba(color, intensity);
    const rgbaSubtle = hexToRgba(color, intensity * 0.35);

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-white/[0.07] bg-[#0A0E1A]/70 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.14]",
          className
        )}
        style={{
          boxShadow: `0 0 0 1px ${rgbaSubtle}, 0 0 ${blur}px ${rgba}, 0 ${blur / 2}px ${blur * 2}px ${hexToRgba(color, intensity * 0.25)}`,
          ...style,
        }}
        {...props}
      >
        {/* Inset glow rim — top edge highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse 60% 30% at 50% 0%, ${hexToRgba(color, 0.12)} 0%, transparent 70%)`,
          }}
        />
        {children}
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";

/* ─── Glow utility — standalone glowing border div (no background) ── */
interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  intensity?: number;
  blur?: number;
}

const GlowBorder = React.forwardRef<HTMLDivElement, GlowBorderProps>(
  ({ color = "#1A56DB", intensity = 0.5, blur = 24, className, style, children, ...props }, ref) => {
    const rgba = hexToRgba(color, intensity);
    const rgbaRim = hexToRgba(color, intensity * 0.4);

    return (
      <div
        ref={ref}
        className={cn("relative rounded-2xl", className)}
        style={{
          boxShadow: `0 0 0 1px ${rgbaRim}, 0 0 ${blur}px ${rgba}`,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlowBorder.displayName = "GlowBorder";

/* ─── Helper ───────────────────────────────────────────────────────── */
function hexToRgba(hex: string, alpha: number): string {
  // Support full 6-char hex or shorthand
  const cleaned = hex.replace(/^#/, "");
  const full = cleaned.length === 3
    ? cleaned.split("").map((c) => c + c).join("")
    : cleaned;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
}

export { GlowCard, GlowBorder };

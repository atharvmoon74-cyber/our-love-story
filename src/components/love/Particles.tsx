import { useMemo } from "react";

type Props = {
  count?: number;
  variant?: "stars" | "hearts" | "mixed";
};

const HEART = "❤";
const STAR = "✦";

export function Particles({ count = 30, variant = "mixed" }: Props) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 6 + Math.random() * 8;
        const size = 8 + Math.random() * 18;
        const symbol =
          variant === "stars" ? STAR : variant === "hearts" ? HEART : Math.random() > 0.5 ? HEART : STAR;
        const opacity = 0.3 + Math.random() * 0.5;
        return { i, left, delay, duration, size, symbol, opacity };
      }),
    [count, variant],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.i}
          className="absolute bottom-[-40px] animate-float-up will-change-transform"
          style={{
            left: `${p.left}%`,
            fontSize: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            color: p.symbol === HEART ? "var(--rose)" : "var(--gold)",
            opacity: p.opacity,
            filter: "drop-shadow(0 0 8px currentColor)",
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}

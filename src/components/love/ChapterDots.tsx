import { useEffect, useState } from "react";
import { chapters } from "@/data/chapters";

export function ChapterDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const ids = chapters.map((c) => `chapter-${c.id}`);
      const mid = window.innerHeight / 2;
      let current = -1;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) current = i;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {chapters.map((c, i) => (
        <a
          key={c.id}
          href={`#chapter-${c.id}`}
          aria-label={`Go to chapter ${c.id}`}
          className="group relative grid place-items-center"
        >
          <span
            className={`block rounded-full transition-all duration-500 ${
              active === i
                ? "h-3 w-3 bg-[var(--rose)] glow-pink"
                : "h-2 w-2 bg-foreground/30 group-hover:bg-foreground/70"
            }`}
          />
          <span className="absolute right-5 whitespace-nowrap text-[10px] uppercase tracking-widest text-foreground/0 group-hover:text-foreground/80 transition-colors">
            Ch.{String(c.id).padStart(2, "0")}
          </span>
        </a>
      ))}
    </nav>
  );
}

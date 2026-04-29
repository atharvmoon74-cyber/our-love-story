import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function MissYouMeter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [pct, setPct] = useState(0);
  const target = 99;

  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const id = setInterval(() => {
      v += 2;
      if (v >= target) {
        v = target;
        clearInterval(id);
      }
      setPct(v);
    }, 30);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--plum)]/20 to-black" />
      <div className="relative max-w-2xl w-full text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3">
          ✦ Live Status ✦
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow mb-10">
          Currently Missing You
        </h2>

        <div className="glass rounded-3xl p-8 sm:p-10">
          <div className="flex items-end justify-center gap-2 mb-6">
            <span className="font-display text-7xl sm:text-8xl text-gradient-romantic text-shadow-glow tabular-nums">
              {pct}
            </span>
            <span className="font-display text-3xl text-foreground/70 mb-3">%</span>
          </div>

          <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4 }}
              className="h-full bg-gradient-to-r from-[var(--gold)] via-[var(--rose)] to-[var(--plum)] glow-pink"
            />
          </div>

          <p className="mt-6 font-script text-2xl sm:text-3xl text-[var(--rose)]">
            (the other 1% is on the way to see you)
          </p>
        </div>
      </div>
    </section>
  );
}

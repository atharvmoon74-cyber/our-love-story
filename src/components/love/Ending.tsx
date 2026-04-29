import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { Starfield } from "./Starfield";
import { Particles } from "./Particles";

export function Ending() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (!inView) return;
    const fire = () => {
      const colors = ["#ff4f9a", "#a855f7", "#f5c451", "#ffffff"];
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.7 },
        colors,
        scalar: 1.1,
      });
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.8 },
        colors,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 },
        colors,
      });
    };
    fire();
    const i1 = setTimeout(fire, 800);
    const i2 = setTimeout(fire, 1800);
    return () => {
      clearTimeout(i1);
      clearTimeout(i2);
    };
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden bg-black"
    >
      <Starfield density={150} />
      <Particles count={25} variant="hearts" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-display italic text-2xl sm:text-3xl md:text-4xl text-foreground/80"
        >
          This is only Chapter One...
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-4 font-display italic text-2xl sm:text-3xl md:text-4xl text-foreground/80"
        >
          Imagine the whole movie.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 font-display text-4xl sm:text-6xl md:text-7xl leading-tight text-gradient-luxe text-shadow-glow animate-letter-glow"
        >
          Happy 25th
          <br />
          <span className="font-script text-gradient-romantic">Relationship Day</span>
          <span className="text-[var(--rose)]"> ❤</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.6, duration: 1.4 }}
          className="mt-10 font-script text-4xl sm:text-5xl md:text-6xl text-gradient-gold text-shadow-gold"
        >
          I Love You.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3, duration: 1.5 }}
          className="mx-auto mt-12 h-[2px] w-48 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3.4, duration: 1 }}
          className="mt-6 text-xs uppercase tracking-[0.5em] text-foreground/50"
        >
          ✦ Fin ✦
        </motion.p>
      </div>
    </section>
  );
}

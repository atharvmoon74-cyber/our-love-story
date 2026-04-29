import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Relationship started 25 days ago from today
const START = new Date();
START.setDate(START.getDate() - 25);
START.setHours(START.getHours() - 3);

function diff() {
  const now = new Date();
  let ms = now.getTime() - START.getTime();
  const days = Math.floor(ms / 86400000);
  ms -= days * 86400000;
  const hours = Math.floor(ms / 3600000);
  ms -= hours * 3600000;
  const minutes = Math.floor(ms / 60000);
  ms -= minutes * 60000;
  const seconds = Math.floor(ms / 1000);
  return { days, hours, minutes, seconds };
}

export function LiveCounter() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const items: Array<[string, number]> = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--plum)]/30 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,80,160,0.15),transparent_70%)]" />

      <div className="relative max-w-5xl w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3"
        >
          ✦ Loving You Since ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow mb-12"
        >
          Together, Every Second
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {items.map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="glass rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-transform"
            >
              <div className="font-display text-5xl sm:text-6xl md:text-7xl text-gradient-romantic text-shadow-glow tabular-nums">
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-foreground/70">
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 font-script text-3xl sm:text-4xl text-[var(--rose)] text-shadow-glow"
        >
          and counting forever ❤
        </motion.p>
      </div>
    </section>
  );
}

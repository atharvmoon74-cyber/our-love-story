import { motion } from "framer-motion";

const CREDITS: Array<[string, string]> = [
  ["Directed by", "Fate"],
  ["Written by", "Destiny"],
  ["Cinematography", "Every Quiet Moment"],
  ["Soundtrack", "Your Laughter"],
  ["Starring", "Us ❤"],
  ["Produced with", "Love, Forever"],
];

export function MovieCredits() {
  return (
    <section className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_70%)]" />

      <div className="relative max-w-2xl w-full text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-10">
          ✦ End Credits ✦
        </p>

        <div className="space-y-6">
          {CREDITS.map(([role, name], i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.18 }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
                {role}
              </p>
              <p className="mt-1 font-display text-3xl sm:text-4xl text-gradient-luxe">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

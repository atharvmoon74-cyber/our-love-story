import { motion } from "framer-motion";

const lines = [
  "Thank you for loving me.",
  "Thank you for choosing me.",
  "Thank you for caring.",
  "Thank you for your effort.",
  "Thank you for making life beautiful.",
  "Thank you for being you.",
];

export function ThankYouLetter() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--plum)]/40 via-black to-[var(--rose)]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,200,150,0.1),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass max-w-3xl w-full rounded-[2rem] p-8 sm:p-14 md:p-16 text-center"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-romantic text-xs uppercase tracking-[0.4em] text-white shadow-lg">
          A Letter For You
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-script text-5xl sm:text-6xl md:text-7xl text-gradient-gold text-shadow-gold mb-8"
        >
          My Love,
        </motion.h2>

        <div className="space-y-4">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.7 }}
              className="font-script text-2xl sm:text-3xl md:text-4xl text-foreground/95"
            >
              {l}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-10 font-display italic text-lg text-[var(--gold)]"
        >
          — Forever yours
        </motion.p>
      </motion.div>
    </section>
  );
}

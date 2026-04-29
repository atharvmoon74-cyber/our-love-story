import { motion } from "framer-motion";
import { reasons } from "@/data/chapters";

export function Reasons() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--plum)]/15 to-black" />

      <div className="relative max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3">✦ Endless Reasons ✦</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow">
            Why I Love You
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group relative glass rounded-2xl p-6 sm:p-8 text-center cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[var(--rose)]/20 via-transparent to-[var(--gold)]/20" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl mb-3 transition-transform group-hover:scale-125">
                  {["✨", "💎", "🌹", "💫", "🎶", "💝", "💖", "👑"][i % 8]}
                </div>
                <p className="font-display text-lg sm:text-xl text-foreground/90">{r}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

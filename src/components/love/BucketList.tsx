import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ITEMS = [
  { label: "Our 100th Day Together", done: false },
  { label: "6 Months of Us", done: false },
  { label: "Our First Year", done: false },
  { label: "A Trip Just For Two", done: false },
  { label: "Watching Sunsets in a New City", done: false },
  { label: "Forever — and every day after", done: false },
];

export function BucketList() {
  return (
    <section className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--plum)]/15 to-black" />
      <div className="relative max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3">
            ✦ Future Bucket List ✦
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow">
            Things Waiting For Us
          </h2>
        </motion.div>

        <ul className="space-y-3">
          {ITEMS.map((it, i) => (
            <motion.li
              key={it.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-2xl px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4 group hover:scale-[1.02] transition-transform"
            >
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 transition-all ${
                  it.done
                    ? "bg-[var(--rose)] border-[var(--rose)] glow-pink"
                    : "border-white/30 group-hover:border-[var(--gold)]"
                }`}
              >
                {it.done && <Check className="h-4 w-4 text-white" />}
              </span>
              <span className="font-display text-lg sm:text-xl text-foreground/90">
                {it.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

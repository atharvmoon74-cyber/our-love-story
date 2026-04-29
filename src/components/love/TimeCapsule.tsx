import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

export function TimeCapsule() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--plum)]/30 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,196,81,0.1),transparent_70%)]" />

      <div className="relative max-w-2xl w-full text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3">
          ✦ Time Capsule ✦
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow mb-12">
          Open On Our 100th Day
        </h2>

        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="env"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="mx-auto block group"
            >
              <div className="relative mx-auto w-64 h-44 sm:w-80 sm:h-52 rounded-xl bg-gradient-to-br from-[var(--gold)]/90 via-[#e8b04a] to-[#b88836] shadow-luxe overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mail className="h-16 w-16 text-black/70" />
                </div>
                <div
                  className="absolute inset-x-0 top-0 h-1/2"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 49.5%, rgba(0,0,0,0.15) 50%), linear-gradient(225deg, transparent 49.5%, rgba(0,0,0,0.15) 50%)",
                  }}
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-[var(--rose)] glow-pink" />
              </div>
              <p className="mt-6 font-display italic text-foreground/80 group-hover:text-[var(--gold)] transition-colors">
                Tap to open early (just this once 🤍)
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="msg"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 sm:p-10 text-left"
            >
              <p className="font-script text-3xl sm:text-4xl text-gradient-gold mb-4">
                Hey future us 💞
              </p>
              <p className="font-display italic text-lg sm:text-xl text-foreground/90 leading-relaxed">
                If you're reading this on day 100, I hope we're laughing about
                something silly, planning something exciting, and still looking
                at each other the way we do now. Whatever the world looks like
                — promise me one thing: we keep choosing us.
              </p>
              <p className="mt-6 font-script text-2xl text-[var(--rose)]">— Past me, still in love</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

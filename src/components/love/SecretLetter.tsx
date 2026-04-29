import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Heart } from "lucide-react";

// 🔒 Edit the password below to anything personal (lowercase)
const PASSWORD = "iloveyou";

export function SecretLetter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      setOpen(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1200);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--plum)]/25 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,196,81,0.12),transparent_70%)]" />

      <div className="relative max-w-2xl w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3"
        >
          ✦ A Secret For You ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow mb-10"
        >
          The Locked Love Letter
        </motion.h2>

        <AnimatePresence mode="wait">
          {!open ? (
            <motion.form
              key="lock"
              onSubmit={submit}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass rounded-3xl p-8 sm:p-10"
            >
              <motion.div
                animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-romantic glow-pink animate-pulse-glow"
              >
                <Lock className="h-8 w-8 text-white" />
              </motion.div>
              <p className="text-foreground/80 mb-6 font-display italic">
                Enter our secret word to unlock your letter
              </p>
              <input
                type="password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="our secret..."
                className="w-full rounded-full bg-white/5 border border-white/15 px-6 py-3 text-center text-foreground placeholder:text-foreground/40 outline-none focus:border-[var(--rose)] transition-colors"
              />
              {error && (
                <p className="mt-3 text-sm text-[var(--rose)]">Try again, my love ❤</p>
              )}
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 bg-romantic text-white font-medium glow-pink hover:scale-105 transition-transform"
              >
                Unlock <Heart className="h-4 w-4" />
              </button>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                Hint: three words, no spaces 💕
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-[2rem] p-8 sm:p-12 text-left"
            >
              <p className="font-script text-4xl sm:text-5xl text-gradient-gold mb-6">
                My Sunshine,
              </p>
              <div className="space-y-4 font-script text-xl sm:text-2xl text-foreground/95 leading-relaxed">
                <p>If you're reading this, you found my secret. ✨</p>
                <p>
                  Every quiet thought I have, somehow, leads back to you. You're the
                  pause between my heartbeats, the warmth in my mornings, the calm
                  in my chaos.
                </p>
                <p>
                  I don't know how I got this lucky — but I promise to keep loving
                  you louder, softer, deeper, every single day.
                </p>
                <p className="text-[var(--rose)]">Forever and always yours ❤</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

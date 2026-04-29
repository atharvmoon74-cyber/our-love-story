import { motion } from "framer-motion";
import heroStars from "@/assets/hero-stars.jpg";
import { Starfield } from "./Starfield";

export function Hero() {
  const scrollToFirst = () => {
    document.getElementById("chapter-1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <img
        src={heroStars}
        alt="Starry sky"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <Starfield density={120} />

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--plum)]/20 to-black"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xs sm:text-sm uppercase tracking-[0.5em] text-[var(--gold)] mb-6"
        >
          ✦ A Love Story ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] text-gradient-luxe text-shadow-glow"
        >
          Our Beautiful
          <br />
          <em className="font-script not-italic text-gradient-romantic">Story</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-8 font-display text-xl sm:text-2xl md:text-3xl text-foreground/85 italic"
        >
          25 days down...
          <br />
          <span className="text-[var(--rose)]">A lifetime to go ❤</span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          onClick={scrollToFirst}
          className="mt-12 group relative inline-flex items-center gap-3 rounded-full px-10 py-4 text-base sm:text-lg font-medium text-white bg-romantic glow-pink animate-pulse-glow transition-transform hover:scale-105 active:scale-100"
        >
          <span className="relative z-10">Start The Journey</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--gold)] via-[var(--rose)] to-[var(--plum)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 text-foreground/60 text-xs tracking-[0.3em]"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

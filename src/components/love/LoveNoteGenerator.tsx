import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Shuffle } from "lucide-react";

const NOTES = [
  "You are the softest part of my day.",
  "Even the moon is a little jealous of how you glow.",
  "Loving you is the easiest thing I've ever done.",
  "Today, like every day — I choose you again.",
  "You're my favorite hello and my hardest goodbye.",
  "If forever had a face, it would look like yours.",
  "You make ordinary days feel like poetry.",
  "Some people search a lifetime. I just looked at you.",
];

const MEMORIES = [
  "That first message I almost didn't send 💌",
  "Late-night calls that turned into sunrises ☀",
  "Your laugh when I said something silly 😂",
  "The way you typed 'goodnight' but stayed up anyway 🌙",
  "Our first 'I love you' — half-whispered, fully felt 💞",
  "The playlist I made just to make you smile 🎶",
  "That photo I keep coming back to 📸",
  "The day everything quietly changed forever ✨",
];

function Card({
  title,
  label,
  pool,
  emoji,
  accent,
}: {
  title: string;
  label: string;
  pool: string[];
  emoji: string;
  accent: "gold" | "rose";
}) {
  const [i, setI] = useState(0);
  const [k, setK] = useState(0);

  const next = () => {
    let n = i;
    while (n === i && pool.length > 1) n = Math.floor(Math.random() * pool.length);
    setI(n);
    setK((x) => x + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="glass rounded-3xl p-8 sm:p-10 text-center flex flex-col"
    >
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-2">{label}</p>
      <h3 className="font-display text-2xl sm:text-3xl text-gradient-luxe mb-6">{title}</h3>

      <div className="relative min-h-[140px] flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={k}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.6 }}
            className="font-script text-2xl sm:text-3xl text-foreground/95"
          >
            {emoji} {pool[i]}
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        onClick={next}
        className={`mt-6 inline-flex mx-auto items-center gap-2 rounded-full px-6 py-3 text-white font-medium transition-transform hover:scale-105 ${
          accent === "gold"
            ? "bg-gradient-to-r from-[var(--gold)] to-[var(--rose)]"
            : "bg-romantic glow-pink"
        }`}
      >
        {accent === "gold" ? <Sparkles className="h-4 w-4" /> : <Shuffle className="h-4 w-4" />}
        {accent === "gold" ? "Generate Today's Note" : "Show Cute Memory"}
      </button>
    </motion.div>
  );
}

export function LoveNoteGenerator() {
  return (
    <section className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--plum)]/20 to-black" />

      <div className="relative max-w-5xl w-full grid md:grid-cols-2 gap-6">
        <Card title="Daily Love Note" label="✦ For Today ✦" pool={NOTES} emoji="💌" accent="gold" />
        <Card title="A Random Memory" label="✦ From Us ✦" pool={MEMORIES} emoji="" accent="rose" />
      </div>
    </section>
  );
}

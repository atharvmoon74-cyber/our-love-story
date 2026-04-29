import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Chapter } from "@/data/chapters";

type Props = {
  chapter: Chapter;
  index: number;
};

export function StorySection({ chapter, index }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const flip = index % 2 === 1;

  return (
    <section
      ref={ref}
      id={`chapter-${chapter.id}`}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6"
    >
      {/* Parallax bg */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={chapter.image}
          alt=""
          className="h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 80%)" }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className={`relative z-10 mx-auto max-w-6xl grid gap-10 md:gap-16 items-center md:grid-cols-2 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--rose)]/40 via-[var(--plum)]/30 to-[var(--gold)]/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="relative overflow-hidden rounded-3xl glass aspect-[4/5] sm:aspect-[3/4]">
            <img
              src={chapter.image}
              alt={`Memory ${chapter.id}`}
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="font-script text-2xl text-[var(--gold)] text-shadow-gold">
                Chapter {chapter.id}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                Memory
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: flip ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--gold)] mb-4"
          >
            ✦ Chapter {String(chapter.id).padStart(2, "0")} ✦
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-gradient-luxe text-shadow-glow"
          >
            {chapter.title}
          </motion.h2>

          <div className="mt-6 space-y-3">
            {chapter.lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.18 }}
                className="font-display text-lg sm:text-xl md:text-2xl text-foreground/85 italic"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 mx-auto md:mx-0 h-[2px] w-32 bg-gradient-to-r from-[var(--gold)] via-[var(--rose)] to-transparent origin-left"
          />
        </div>
      </motion.div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import placeholder from "@/assets/chapter-placeholder.jpg";

// 📷 Replace with your own 10 photos. Each entry: { src, caption }
const PHOTOS = Array.from({ length: 10 }).map((_, i) => ({
  src: placeholder,
  caption: `Memory #${i + 1}`,
}));

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--plum)]/15 to-black" />

      <div className="relative max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3">
            ✦ Our Gallery ✦
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow">
            Frozen Moments
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {PHOTOS.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ scale: 1.04, zIndex: 1 }}
              onClick={() => setActive(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl glass"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 text-[10px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {p.caption}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={PHOTOS[active].src}
                alt={PHOTOS[active].caption}
                className="w-full max-h-[80vh] object-contain rounded-2xl glass"
              />
              <p className="mt-4 text-center font-script text-2xl text-[var(--gold)]">
                {PHOTOS[active].caption}
              </p>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-4 -right-4 grid h-10 w-10 place-items-center rounded-full bg-romantic glow-pink text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

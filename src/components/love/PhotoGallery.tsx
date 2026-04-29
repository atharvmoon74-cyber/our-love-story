import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import pic4 from "@/assets/pic4.jpg";
import pic5 from "@/assets/pic5.jpg";
import pic6 from "@/assets/pic6.jpg";
import pic7 from "@/assets/pic7.jpg";
import pic8 from "@/assets/pic8.jpg";
import pic9 from "@/assets/pic9.jpg";
import pic10 from "@/assets/pic10.jpg";

// 📷 Real gallery photos
const PHOTOS = [
  { src: pic1, caption: "Where destiny began ❤️" },
  { src: pic2, caption: "From random talks to something special ✨" },
  { src: pic3, caption: "You became my favorite habit 💌" },
  { src: pic4, caption: "No day felt complete without you 📱" },
  { src: pic5, caption: "You became my first thought 🌙" },
  { src: pic6, caption: "Best decision of my life 💍" },
  { src: pic7, caption: "Our cute chaos 😘" },
  { src: pic8, caption: "Little moments, big feelings 📸" },
  { src: pic9, caption: "25 beautiful days together 🎉" },
  { src: pic10, caption: "The future I want with you 🌟" },
];

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--plum)]/15 to-black" />

      {/* Floating glow lights */}
      <div className="absolute top-20 left-10 h-44 w-44 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute bottom-16 right-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3">
            ✦ Our Gallery ✦
          </p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-luxe text-shadow-glow">
            Frozen Moments
          </h2>

          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Every picture holds a memory. Every memory holds you.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {PHOTOS.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => setActive(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl glass"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-2 left-2 text-[10px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {p.caption}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen Popup */}
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
              transition={{ duration: 0.45 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={PHOTOS[active].src}
                alt={PHOTOS[active].caption}
                className="w-full max-h-[80vh] object-contain rounded-2xl glass"
              />

              <p className="mt-4 text-center text-xl sm:text-2xl text-[var(--gold)]">
                {PHOTOS[active].caption}
              </p>

              <button
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white hover:scale-110 transition"
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
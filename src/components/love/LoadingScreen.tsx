import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      setTimeout(onDone, 900);
    }, 2800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
        >
          <div className="text-center px-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mx-auto mb-8 h-16 w-16 rounded-full bg-romantic glow-pink animate-pulse-glow"
            />
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-display text-3xl md:text-5xl tracking-wide text-foreground animate-letter-glow"
            >
              Preparing Our Love Story
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "12rem" }}
              transition={{ delay: 0.8, duration: 2 }}
              className="mx-auto mt-8 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

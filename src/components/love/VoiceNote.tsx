import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

// 🎙️ Replace with your own recorded message URL (mp3/wav)
const VOICE_URL =
  "https://cdn.pixabay.com/audio/2022/03/15/audio_5b3c2a3052.mp3";

export function VoiceNote() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const a = new Audio(VOICE_URL);
    audioRef.current = a;
    const onTime = () =>
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => {
      a.pause();
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <section className="relative w-full flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--plum)]/20 to-black" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative glass rounded-3xl p-8 sm:p-10 max-w-xl w-full text-center"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)] mb-3">
          ✦ Voice Note ✦
        </p>
        <h3 className="font-display text-3xl sm:text-4xl text-gradient-luxe mb-8">
          A Message From Me ❤
        </h3>

        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-romantic glow-pink hover:scale-110 transition-transform"
        >
          {playing ? (
            <Pause className="h-10 w-10 text-white" />
          ) : (
            <Play className="h-10 w-10 text-white translate-x-1" />
          )}
          {playing && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[var(--rose)]"
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          )}
        </button>

        <div className="mt-8 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--gold)] via-[var(--rose)] to-[var(--plum)] transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 font-display italic text-foreground/70">
          {playing ? "Listen carefully..." : "Press play to hear me whisper ✨"}
        </p>
      </motion.div>
    </section>
  );
}

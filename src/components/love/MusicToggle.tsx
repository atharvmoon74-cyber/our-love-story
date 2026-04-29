import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const TRACK_URL =
  "https://cdn.pixabay.com/audio/2022/10/30/audio_347111d654.mp3"; // soft romantic piano (royalty-free)

export function MusicToggle({ autoStart }: { autoStart?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const a = new Audio(TRACK_URL);
    a.loop = true;
    a.volume = 0.35;
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!autoStart) return;
    const a = audioRef.current;
    if (!a) return;
    a.play()
      .then(() => setMuted(false))
      .catch(() => setMuted(true));
  }, [autoStart]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.play()
        .then(() => setMuted(false))
        .catch(() => setMuted(true));
    } else {
      a.pause();
      setMuted(true);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: "spring" }}
      onClick={toggle}
      aria-label={muted ? "Unmute music" : "Mute music"}
      className="fixed top-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full glass text-foreground hover:scale-110 transition-transform animate-pulse-glow"
    >
      {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5 text-[var(--rose)]" />}
    </motion.button>
  );
}

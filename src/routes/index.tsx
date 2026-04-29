import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { LoadingScreen } from "@/components/love/LoadingScreen";
import { Hero } from "@/components/love/Hero";
import { StorySection } from "@/components/love/StorySection";
import { ThankYouLetter } from "@/components/love/ThankYouLetter";
import { Reasons } from "@/components/love/Reasons";
import { LiveCounter } from "@/components/love/LiveCounter";
import { Ending } from "@/components/love/Ending";
import { MusicToggle } from "@/components/love/MusicToggle";
import { ScrollProgress } from "@/components/love/ScrollProgress";
import { SparkleCursor } from "@/components/love/SparkleCursor";
import { Particles } from "@/components/love/Particles";
import { ChapterDots } from "@/components/love/ChapterDots";
import { SecretLetter } from "@/components/love/SecretLetter";
import { VoiceNote } from "@/components/love/VoiceNote";
import { LoveNoteGenerator } from "@/components/love/LoveNoteGenerator";
import { BucketList } from "@/components/love/BucketList";
import { TimeCapsule } from "@/components/love/TimeCapsule";
import { MissYouMeter } from "@/components/love/MissYouMeter";
import { MovieCredits } from "@/components/love/MovieCredits";
import { PhotoGallery } from "@/components/love/PhotoGallery";
import { chapters } from "@/data/chapters";

import song from "@/assets/song.mp3";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Beautiful Story • A Cinematic Love Letter ❤" },
      {
        name: "description",
        content:
          "A premium cinematic love story made just for you — every chapter, every memory, every reason.",
      },
    ],
  }),
  component: LoveStory,
});

function LoveStory() {
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 🎵 AUTO SONG ON WEBSITE OPEN
  useEffect(() => {
    const audio = new Audio(song);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    const playMusic = async () => {
      try {
        await audio.play();
      } catch {
        // If blocked, first click starts it
      }
    };

    playMusic();

    const unlock = async () => {
      try {
        await audio.play();
      } catch {}
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);

    return () => {
      audio.pause();
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  // 💖 FASTER AUTO SCROLL AFTER LOADING
  useEffect(() => {
    if (!ready) return;

    const startDelay = setTimeout(() => {
      const autoScroll = setInterval(() => {
        window.scrollBy({
          top: 3,
          behavior: "smooth",
        });

        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 5
        ) {
          clearInterval(autoScroll);
        }
      }, 20);

      const stopScroll = () => clearInterval(autoScroll);

      window.addEventListener("wheel", stopScroll, { once: true });
      window.addEventListener("touchstart", stopScroll, { once: true });
      window.addEventListener("keydown", stopScroll, { once: true });

      return () => clearInterval(autoScroll);
    }, 2500);

    return () => clearTimeout(startDelay);
  }, [ready]);

  return (
    <main className="relative bg-black text-foreground">
      <LoadingScreen onDone={() => setReady(true)} />

      <AnimatePresence>
        {ready && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <ScrollProgress />
            <MusicToggle autoStart />
            <SparkleCursor />
            <ChapterDots />

            <div className="pointer-events-none fixed inset-0 z-0">
              <Particles count={18} variant="mixed" />
            </div>

            <div className="relative z-10">
              <Hero />

              {chapters.map((c, i) => (
                <StorySection key={c.id} chapter={c} index={i} />
              ))}

              <PhotoGallery />
              <VoiceNote />
              <LoveNoteGenerator />
              <Reasons />
              <ThankYouLetter />
              <SecretLetter />
              <BucketList />
              <MissYouMeter />
              <TimeCapsule />
              <LiveCounter />
              <MovieCredits />
              <Ending />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
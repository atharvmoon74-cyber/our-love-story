import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Beautiful Story • A Cinematic Love Letter ❤" },
      {
        name: "description",
        content:
          "A premium cinematic love story made just for you — every chapter, every memory, every reason.",
      },
      { property: "og:title", content: "Our Beautiful Story ❤" },
      {
        property: "og:description",
        content: "A cinematic love letter celebrating us.",
      },
    ],
  }),
  component: LoveStory,
});

function LoveStory() {
  const [ready, setReady] = useState(false);

  return (
    <main className="relative bg-black text-foreground">
      <LoadingScreen onDone={() => setReady(true)} />

      <AnimatePresence>
        {ready && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <ScrollProgress />
            <MusicToggle autoStart />
            <SparkleCursor />
            <ChapterDots />

            {/* Ambient floating particles across the whole story */}
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

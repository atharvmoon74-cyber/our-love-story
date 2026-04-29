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
import { chapters } from "@/data/chapters";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Beautiful Story • Happy 25th Relationship Day ❤" },
      {
        name: "description",
        content:
          "A cinematic love letter — 25 days down, a lifetime to go. A premium romantic story made just for you.",
      },
      { property: "og:title", content: "Our Beautiful Story ❤" },
      {
        property: "og:description",
        content: "A cinematic love letter celebrating 25 days together.",
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

              <ThankYouLetter />
              <Reasons />
              <LiveCounter />
              <Ending />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

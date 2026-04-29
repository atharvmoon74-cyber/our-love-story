import chapterPlaceholder from "@/assets/chapter-placeholder.jpg";

export type Chapter = {
  id: number;
  title: string;
  lines: string[];
  image: string;
};

// Replace `image` paths with your own photos in src/assets/ or public/
export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Accident That Was Destiny",
    lines: [
      "It started with something random...",
      "A dare. A message.",
      "Two strangers who didn't know fate had begun.",
    ],
    image: chapterPlaceholder,
  },
  {
    id: 2,
    title: "Threads to Something Real",
    lines: ["You gave me your Instagram...", "And random talks became special."],
    image: chapterPlaceholder,
  },
  {
    id: 3,
    title: "Becoming Close",
    lines: ["Between good mornings and good nights...", "You became my favorite habit."],
    image: chapterPlaceholder,
  },
  {
    id: 4,
    title: "WhatsApp Era",
    lines: ["You gave me your number...", "And no day felt complete without you."],
    image: chapterPlaceholder,
  },
  {
    id: 5,
    title: "Feelings We Couldn't Hide",
    lines: ["You became my first thought...", "And my last smile each night."],
    image: chapterPlaceholder,
  },
  {
    id: 6,
    title: "The Proposal",
    lines: [
      "Before your board exams...",
      "You proposed me.",
      "I said yes instantly.",
      "Best decision of my life ❤️",
    ],
    image: chapterPlaceholder,
  },
  {
    id: 7,
    title: "Our Cute Chaos",
    lines: ["We annoy each other.", "We miss each other.", "We still choose each other daily."],
    image: chapterPlaceholder,
  },
  {
    id: 8,
    title: "Little Memories",
    lines: ["Small moments to the world...", "Priceless chapters to me."],
    image: chapterPlaceholder,
  },
  {
    id: 9,
    title: "Today",
    lines: ["25 Beautiful Days Together.", "Short time...", "Big love."],
    image: chapterPlaceholder,
  },
  {
    id: 10,
    title: "The Future",
    lines: ["50 days.", "100 days.", "1 year.", "Every year after that... with you."],
    image: chapterPlaceholder,
  },
];

export const reasons = [
  "Your smile",
  "Your loyalty",
  "Your madness",
  "Your care",
  "Your voice",
  "Your effort",
  "Your heart",
  "Your love",
];

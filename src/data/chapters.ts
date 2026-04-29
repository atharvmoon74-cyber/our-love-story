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

export type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  lines: string[];
  image: string;
};

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Message That Changed Everything",
    subtitle: "Where destiny quietly began",
    lines: [
      "It started with something random...",
      "A dare. A message.",
      "Two strangers with no clue...",
      "that fate had already pressed send.",
    ],
    image: pic1,
  },
  {
    id: 2,
    title: "Threads to Something Real",
    subtitle: "From random chats to comfort",
    lines: [
      "You gave me your Instagram...",
      "And suddenly conversations felt different.",
      "Some people text...",
      "You felt like peace.",
    ],
    image: pic2,
  },
  {
    id: 3,
    title: "Becoming Close",
    subtitle: "Slowly, beautifully, naturally",
    lines: [
      "We laughed more.",
      "We talked longer.",
      "Between good mornings and good nights...",
      "you became my favorite habit.",
    ],
    image: pic3,
  },
  {
    id: 4,
    title: "WhatsApp Era",
    subtitle: "Where attachment became real",
    lines: [
      "You gave me your number...",
      "And that changed everything.",
      "No single day felt complete...",
      "without talking to you.",
    ],
    image: pic4,
  },
  {
    id: 5,
    title: "Feelings We Couldn't Hide",
    subtitle: "Hearts spoke first",
    lines: [
      "We were no longer just talking...",
      "We were feeling.",
      "You became my first thought in the morning...",
      "and my last smile at night.",
    ],
    image: pic5,
  },
  {
    id: 6,
    title: "The Proposal",
    subtitle: "The easiest yes of my life",
    lines: [
      "Before your board exams...",
      "you proposed me.",
      "And I said yes instantly...",
      "Best decision of my life ❤️",
    ],
    image: pic6,
  },
  {
    id: 7,
    title: "Our Cute Chaos",
    subtitle: "Messy, funny, beautiful love",
    lines: [
      "We annoy each other.",
      "We overthink sometimes.",
      "We miss each other in minutes.",
      "Yet we still choose each other every day.",
    ],
    image: pic7,
  },
  {
    id: 8,
    title: "Little Memories",
    subtitle: "Small moments, priceless feelings",
    lines: [
      "Maybe they look small to the world...",
      "But to me they are treasures.",
      "Every smile.",
      "Every second with you matters.",
    ],
    image: pic8,
  },
  {
    id: 9,
    title: "Today",
    subtitle: "25 beautiful days later",
    lines: [
      "Only twenty-five days...",
      "Yet enough to know something rare.",
      "Short time...",
      "Big love ❤️",
    ],
    image: pic9,
  },
  {
    id: 10,
    title: "The Future",
    subtitle: "The chapters I still want with you",
    lines: [
      "50 days.",
      "100 days.",
      "1 year.",
      "Every year after that...",
      "with you.",
    ],
    image: pic10,
  },
];

export const reasons = [
  "Your smile that fixes my mood",
  "Your loyalty that feels rare",
  "Your madness that makes life fun",
  "Your care when I need it most",
  "Your voice that feels like home",
  "Your effort that never goes unnoticed",
  "Your heart that loves deeply",
  "Your love that changed my life",
];

export const finalMessage = {
  title: "Happy 25th Relationship Day ❤️",
  lines: [
    "This website may end here...",
    "But us?",
    "Never.",
    "I love you today, tomorrow, and always.",
  ],
};
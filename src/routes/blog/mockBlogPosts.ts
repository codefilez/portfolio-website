import { BlogPost } from "../../Types";

// Fallback content shown if the blog API is unreachable or empty, so the
// page never looks broken or blank.
export const mockBlogPosts: BlogPost[] = [
  {
    id: `mock-1`,
    title: `Rebuilding this site on Vite`,
    text: `I finally got around to ripping Create React App out of this project. The build is faster, the dev server starts in under a second, and I no longer have a folder full of unexplained polyfills. Worth the afternoon it cost me.`,
    timestamp: `2026-08-30T09:00:00Z`,
    tags: [`Frontend`, `Tooling`],
    readMinutes: 4,
  },
  {
    id: `mock-2`,
    title: `What I learned wiring an LLM into iRacing telemetry`,
    text: `Turning a CSV of lap times and incident counts into something a human wants to read is a surprisingly good use case for an LLM — as long as you feed it real structure instead of hoping it infers one. Notes on the prompt design that actually worked.`,
    timestamp: `2026-08-12T09:00:00Z`,
    tags: [`AI`, `Racing`],
    readMinutes: 6,
  },
  {
    id: `mock-3`,
    title: `Bounded contexts are an org chart problem`,
    text: `Every time I've seen a "microservice" turn into a distributed monolith, the root cause traced back to a bounded context that was drawn around a team's org chart instead of around the actual business capability. Some thoughts after untangling one of these.`,
    timestamp: `2026-07-21T09:00:00Z`,
    tags: [`Architecture`],
    readMinutes: 7,
  },
  {
    id: `mock-4`,
    title: `A year of Zwift and sim racing`,
    text: `Somewhere between cycling and iRacing I accidentally built a second hobby that mostly involves staring at a spreadsheet of my own iRating. A look back at what stuck and what didn't.`,
    timestamp: `2026-06-02T09:00:00Z`,
    tags: [`Racing`, `Fitness`],
    readMinutes: 3,
  },
];

import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const schedules = defineCollection({
  loader: glob({
    pattern: "*.toml",
    base: "./src/content/schedules",
  }),
  schema: z.object({
    no: z.number(),
    type: z.enum(["keynote", "break", "talk", "lt", "other"]),
    speaker: z.string(),
    image: z.string(),
    title: z.string(),
    abstract: z.string(),
    bio: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    duration: z.string(),
    language: z.enum(["Japanese", "English"]),
    github: z.string().optional(),
    x: z.string().optional(),
    bluesky: z.string().optional(),
    titleLink: z.string().optional(),
    slideLink: z.string().optional(),
  }),
});

// コレクションのエクスポート
export const collections = {
  schedules,
};

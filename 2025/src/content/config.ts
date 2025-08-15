import { glob } from "astro/loaders";
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const sponsors = defineCollection({
  loader: glob({
    pattern: "*.toml",
    base: "./src/content/sponsors",
  }),
  schema: z.object({
    rank: z.enum(["platinum", "gold", "silver", "bronze"]),
    name: z.string(),
    url: z.string().url(),
    image: z.string(),
  }),
});

const sessions = defineCollection({
  loader: glob({
    pattern: "*.toml",
    base: "./src/content/sessions",
  }),
  schema: z.object({
    session_id: z.string(),
    start_at: z.coerce.date(),
    end_at: z.coerce.date(),
    speaker_name: z.string(),
    title: z.string(),
    abstract: z.string(),
    self_introduction: z.string().optional(),
  }),
});

// コレクションのエクスポート
export const collections = {
  sponsors,
  sessions,
};

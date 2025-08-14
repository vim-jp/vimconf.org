import { file, glob } from "astro/loaders";
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

const timetable = defineCollection({
  loader: file("./src/content/timetable.toml"),
  schema: z.array(
    z.object({
      title: z.string(),
      start_at: z.coerce.date(),
      end_at: z.coerce.date(),
      speaker_name: z.string().optional(),
      session_id: z.string().optional(),
    }),
  ),
});

export const collections = {
  sponsors,
  timetable,
};

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
    // sponsor: z.array(
    //   z.object({
    //     rank: z.enum(['gold', 'silver', 'bronze']),
    //     name: z.string(),
    //     url: z.string().url(),
    //     image: z.string()
    //   })
    // )
  }),
});

// コレクションのエクスポート
export const collections = {
  sponsors,
};

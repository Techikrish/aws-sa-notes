import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({
    base: "./docs",
    pattern: "**/*.md",
    generateId: ({ entry }) => entry.replace(/\\/g, "/").replace(/\.md$/, "")
  }),
  schema: z
    .object({
      title: z.string().optional(),
      description: z.string().optional()
    })
    .passthrough()
});

export const collections = { notes };

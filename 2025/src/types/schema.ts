import { z } from "astro:content";

const CsvRowSchema = z.object({
  order_number: z.string(),
  name: z.string(),
  comment: z.string(),
  icon: z.string(),
});

const CsvSchema = z.array(CsvRowSchema);

export { CsvSchema };

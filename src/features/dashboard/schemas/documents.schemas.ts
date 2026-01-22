import z from "zod";
import { DocumentFormatSchema } from "./shared.schemas";

export const DocumentSchema = z.object({
  name: z.string(),
  size: z.number(),
  format: DocumentFormatSchema,
  analyzedTimestamp: z.iso.datetime(),
  lastEditAuthorName: z.string(),
  lastEditAuthorTitle: z.string(),
  reviewProgress: z.number(),
  stage: z.string(),
});

export const DocumentsResponseSchema = z.array(DocumentSchema);

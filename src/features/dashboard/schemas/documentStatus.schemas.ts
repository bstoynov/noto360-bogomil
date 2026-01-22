import z from "zod";
import { DocumentFormatSchema } from "./shared.schemas";

export const DocumentStatusResponseSchema = z.object({
  name: z.string(),
  size: z.number(),
  type: DocumentFormatSchema,
  analyzedTimestamp: z.iso.datetime(),
  lastEditAuthorName: z.string(),
  lastEditAuthorTitle: z.string(),
  reviewProgress: z.number(),
  stage: z.string(),
});

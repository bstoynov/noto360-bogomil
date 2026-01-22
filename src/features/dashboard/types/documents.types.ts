import type z from "zod";
import type { DocumentSchema, DocumentsResponseSchema } from "../schemas";

export type Document = z.infer<typeof DocumentSchema>;
export type DocumentsResponse = z.infer<typeof DocumentsResponseSchema>;

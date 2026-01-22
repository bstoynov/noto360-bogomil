import type z from "zod";
import type { DocumentFormatSchema } from "../schemas";

export type DocumentFormat = z.infer<typeof DocumentFormatSchema>;

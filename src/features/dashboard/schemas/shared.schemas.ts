import z from "zod";

export const DocumentFormatSchema = z.enum(["PDF", "DOC"]);

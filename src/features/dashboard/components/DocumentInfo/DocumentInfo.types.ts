import type { Document } from "../../types";

export type DocumentInfoProps = Pick<Document, "name" | "format" | "size">;

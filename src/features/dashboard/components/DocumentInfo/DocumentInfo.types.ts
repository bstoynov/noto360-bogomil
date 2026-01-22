import type { DocumentStatusResponse } from "@features/dashboard/state/documentStatus/documentStatus.types";

export type DocumentInfoProps = Pick<
  DocumentStatusResponse,
  "name" | "type" | "size"
>;

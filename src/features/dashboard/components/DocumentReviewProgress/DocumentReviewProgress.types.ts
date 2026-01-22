import type { DocumentStatusResponse } from "@features/dashboard/state/documentStatus/documentStatus.types";

export type DocumentReviewProgressProps = Pick<
  DocumentStatusResponse,
  "reviewProgress"
>;

import type { DocumentFormat } from "@features/dashboard/types";
import type { IconName } from "@ui";

export const documentTypeIconMap: Record<DocumentFormat, IconName> = {
  PDF: "pdf",
  DOC: "doc",
};

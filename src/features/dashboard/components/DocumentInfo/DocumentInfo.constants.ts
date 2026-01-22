import type { DocumentFormat } from "@features/dashboard/types";
import type { IconProps } from "src/ui/Icon/Icon.types";

export const documentTypeIconMap: Record<DocumentFormat, IconProps["name"]> = {
  PDF: "pdf",
  DOC: "doc",
};

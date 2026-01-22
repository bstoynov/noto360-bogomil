import { createService } from "@api";
import {
  MetricsResponseSchema,
  DocumentStatusResponseSchema,
} from "./DashboardService.schemas";

export default createService({
  getMetrics: {
    method: "GET",
    url: "/metrics",
    responseSchema: MetricsResponseSchema,
  },
  getDocumentStatus: {
    method: "GET",
    url: "/documentStatus",
    responseSchema: DocumentStatusResponseSchema,
  },
});

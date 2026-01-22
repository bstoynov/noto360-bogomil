import { createService } from "@api";
import {
  MetricsResponseSchema,
  DocumentStatusResponseSchema,
  AiSummaryResponseSchema,
} from "../schemas";

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
  getAiSummary: {
    method: "GET",
    url: "/aiSummary",
    responseSchema: AiSummaryResponseSchema,
  },
});

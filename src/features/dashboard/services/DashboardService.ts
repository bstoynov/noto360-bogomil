import { createService } from "@api";
import {
  MetricsResponseSchema,
  DocumentsResponseSchema,
  AiSummaryResponseSchema,
} from "../schemas";

export default createService({
  getMetrics: {
    method: "GET",
    url: "/metrics",
    responseSchema: MetricsResponseSchema,
  },
  getDocuments: {
    method: "GET",
    url: "/documents",
    responseSchema: DocumentsResponseSchema,
  },
  getAiSummary: {
    method: "GET",
    url: "/aiSummary",
    responseSchema: AiSummaryResponseSchema,
  },
});

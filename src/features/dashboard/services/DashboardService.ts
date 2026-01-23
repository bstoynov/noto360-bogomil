import { createService } from "@api";
import {
  MetricsResponseSchema,
  DocumentsResponseSchema,
  AiSummaryResponseSchema,
  RiskTrendResponseSchema,
} from "../schemas";

export default createService({
  getMetrics: {
    method: "GET",
    url: "/api/metrics",
    responseSchema: MetricsResponseSchema,
  },
  getDocuments: {
    method: "GET",
    url: "/api/documents",
    responseSchema: DocumentsResponseSchema,
  },
  getAiSummary: {
    method: "GET",
    url: "/api/aiSummary",
    responseSchema: AiSummaryResponseSchema,
  },
  getRiskTrend: {
    method: "GET",
    url: "/api/riskTrend",
    responseSchema: RiskTrendResponseSchema,
  },
});

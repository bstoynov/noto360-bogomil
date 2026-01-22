import { createService } from "@api";
import { MetricsResponseSchema } from "./DashboardService.schemas";

export default createService({
  getMetrics: {
    method: "GET",
    url: "/metrics",
    responseSchema: MetricsResponseSchema,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import {
  metricsReducer,
  documentsReducer,
  aiSummaryReducer,
  riskTrendReducer,
  relevantCasesReducer,
} from "@features/dashboard/state";

export default configureStore({
  reducer: {
    metrics: metricsReducer,
    documents: documentsReducer,
    aiSummary: aiSummaryReducer,
    riskTrend: riskTrendReducer,
    relevantCases: relevantCasesReducer,
  },
});

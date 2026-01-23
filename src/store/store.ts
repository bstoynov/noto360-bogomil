import { configureStore } from "@reduxjs/toolkit";
import {
  metricsReducer,
  documentsReducer,
  aiSummaryReducer,
  riskTrendReducer,
} from "@features/dashboard/state";

export default configureStore({
  reducer: {
    metrics: metricsReducer,
    documents: documentsReducer,
    aiSummary: aiSummaryReducer,
    riskTrend: riskTrendReducer,
  },
});

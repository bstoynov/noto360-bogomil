import { configureStore } from "@reduxjs/toolkit";
import {
  metricsReducer,
  documentsReducer,
  aiSummaryReducer,
} from "@features/dashboard/state";

export default configureStore({
  reducer: {
    metrics: metricsReducer,
    documents: documentsReducer,
    aiSummary: aiSummaryReducer,
  },
});

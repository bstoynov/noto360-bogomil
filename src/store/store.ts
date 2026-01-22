import { configureStore } from "@reduxjs/toolkit";
import {
  metricsReducer,
  documentStatusReducer,
} from "@features/dashboard/state";

export default configureStore({
  reducer: {
    metrics: metricsReducer,
    documentStatus: documentStatusReducer,
  },
});

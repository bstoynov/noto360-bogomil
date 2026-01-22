import { configureStore } from "@reduxjs/toolkit";
import { metricsReducer } from "@features/dashboard/state";

export default configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});

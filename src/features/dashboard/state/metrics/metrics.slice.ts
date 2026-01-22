import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { MetricsState } from "./metrics.types";
import { DashboardService } from "../../services";

const initialState: MetricsState = {
  data: undefined,
  dataState: "idle",
};

export const fetchMetrics = createAsyncThunk(
  "metrics/fetchMetrics",
  async () => await DashboardService.getMetrics(),
);

const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.dataState = "pending";
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataState = "fulfilled";
      })
      .addCase(fetchMetrics.rejected, (state) => {
        state.dataState = "rejected";
      });
  },
  selectors: {
    selectMetrics: (state) => state.data,
    selectMetricsDataState: (state) => state.dataState,
  },
});

export const { selectMetrics, selectMetricsDataState } = metricsSlice.selectors;

export default metricsSlice.reducer;

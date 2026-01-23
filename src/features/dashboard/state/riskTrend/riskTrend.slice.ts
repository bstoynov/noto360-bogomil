import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RiskTrendState } from "./riskTrend.types";
import { DashboardService } from "../../services";

const initialState: RiskTrendState = {
  data: undefined,
  dataState: "idle",
};

export const fetchRiskTrend = createAsyncThunk(
  "riskTrend/fetchRiskTrend",
  async () => await DashboardService.getRiskTrend(),
);

const riskTrendSlice = createSlice({
  name: "riskTrend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRiskTrend.pending, (state) => {
        state.dataState = "pending";
      })
      .addCase(fetchRiskTrend.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataState = "fulfilled";
      })
      .addCase(fetchRiskTrend.rejected, (state) => {
        state.dataState = "rejected";
      });
  },
  selectors: {
    selectRiskTrend: (state) => state.data,
    selectRiskTrendDataState: (state) => state.dataState,
  },
});

export const { selectRiskTrend, selectRiskTrendDataState } =
  riskTrendSlice.selectors;

export default riskTrendSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { AiSummaryState } from "./aiSummary.types";
import { DashboardService } from "../../services";

const initialState: AiSummaryState = {
  data: undefined,
  dataState: "idle",
};

export const fetchAiSummary = createAsyncThunk(
  "aiSummary/fetchAiSummary",
  async () => await DashboardService.getAiSummary(),
);

const aiSummarySlice = createSlice({
  name: "aiSummary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAiSummary.pending, (state) => {
        state.dataState = "pending";
      })
      .addCase(fetchAiSummary.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataState = "fulfilled";
      })
      .addCase(fetchAiSummary.rejected, (state) => {
        state.dataState = "rejected";
      });
  },
  selectors: {
    selectAiSummary: (state) => state.data,
    selectAiSummaryDataState: (state) => state.dataState,
  },
});

export const { selectAiSummary, selectAiSummaryDataState } =
  aiSummarySlice.selectors;

export default aiSummarySlice.reducer;

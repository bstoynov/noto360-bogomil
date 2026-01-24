import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RelevantCasesState } from "./relevantCases.types";
import { DashboardService } from "../../services";

const initialState: RelevantCasesState = {
  data: undefined,
  dataState: "idle",
};

export const fetchRelevantCases = createAsyncThunk(
  "relevantCases/fetchRelevantCases",
  async () => await DashboardService.getRelevantCases(),
);

const relevantCasesSlice = createSlice({
  name: "relevantCases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelevantCases.pending, (state) => {
        state.dataState = "pending";
      })
      .addCase(fetchRelevantCases.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataState = "fulfilled";
      })
      .addCase(fetchRelevantCases.rejected, (state) => {
        state.dataState = "rejected";
      });
  },
  selectors: {
    selectRelevantCases: (state) => state.data,
    selectRelevantCasesDataState: (state) => state.dataState,
  },
});

export const { selectRelevantCases, selectRelevantCasesDataState } =
  relevantCasesSlice.selectors;

export default relevantCasesSlice.reducer;

import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import type { RelevantCasesState } from "./relevantCases.types";
import type { RelevantCasesTableColumnName, SortOrder } from "../../types";
import { DashboardService } from "../../services";
import { SortOrderSchema } from "@features/dashboard/schemas";

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
    selectRelevantCasesLastPrecedentUpdate: (state) =>
      state.data?.lastPrecedentUpdate,
    selectRelevantCasesDataState: (state) => state.dataState,
  },
});

export const {
  selectRelevantCases,
  selectRelevantCasesDataState,
  selectRelevantCasesLastPrecedentUpdate,
} = relevantCasesSlice.selectors;

export const selectRelevantCasesSorted = createSelector(
  [
    selectRelevantCases,
    (_state, sortField: RelevantCasesTableColumnName | null) => sortField,
    (_state, _sortField, sortOrder: SortOrder) => sortOrder,
  ],
  (data, sortField, sortOrder) => {
    if (!data?.items || !sortField) return data?.items;

    return [...data.items].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const modifier = sortOrder === SortOrderSchema.enum.desc ? -1 : 1;

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return (aVal - bVal) * modifier;
      }

      return String(aVal).localeCompare(String(bVal)) * modifier;
    });
  },
);

export default relevantCasesSlice.reducer;

import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import type { DocumentsState } from "./documents.types";
import { DashboardService } from "../../services";

const initialState: DocumentsState = {
  data: undefined,
  dataState: "idle",
};

export const fetchDocuments = createAsyncThunk(
  "documents/fetchDocuments",
  async () => await DashboardService.getDocuments(),
);

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.dataState = "pending";
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataState = "fulfilled";
      })
      .addCase(fetchDocuments.rejected, (state) => {
        state.dataState = "rejected";
      });
  },
  selectors: {
    selectDocuments: (state) => state.data,
    selectDocumentsDataState: (state) => state.dataState,
    selectDocumentsIsLoading: (state) => state.dataState === "pending",
  },
});

export const {
  selectDocuments,
  selectDocumentsDataState,
  selectDocumentsIsLoading,
} = documentsSlice.selectors;

export const selectPrimaryDocument = createSelector(
  [selectDocuments],
  (documents) => documents?.[0],
);

export default documentsSlice.reducer;

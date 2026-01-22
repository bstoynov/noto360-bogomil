import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { DocumentStatusState } from "./documentStatus.types";
import { DashboardService } from "../../services";

const initialState: DocumentStatusState = {
  data: undefined,
  dataState: "idle",
};

export const fetchDocumentStatus = createAsyncThunk(
  "documentStatus/fetchDocumentStatus",
  async () => await DashboardService.getDocumentStatus(),
);

const documentStatusSlice = createSlice({
  name: "documentStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocumentStatus.pending, (state) => {
        state.dataState = "pending";
      })
      .addCase(fetchDocumentStatus.fulfilled, (state, action) => {
        state.data = action.payload;
        state.dataState = "fulfilled";
      })
      .addCase(fetchDocumentStatus.rejected, (state) => {
        state.dataState = "rejected";
      });
  },
  selectors: {
    selectDocumentStatus: (state) => state.data,
    selectDocumentStatusDataState: (state) => state.dataState,
  },
});

export const { selectDocumentStatus, selectDocumentStatusDataState } =
  documentStatusSlice.selectors;

export default documentStatusSlice.reducer;

import type { DataState } from "src/store/store.types";
import type { DocumentsResponse } from "../../types";

export type DocumentsState = {
  data?: DocumentsResponse;
  dataState: DataState;
};

import type { DocumentStatusResponseSchema } from "../../schemas";
import type { DataState } from "src/store/store.types";
import type z from "zod";

export type DocumentStatusResponse = z.infer<
  typeof DocumentStatusResponseSchema
>;

export type DocumentStatusState = {
  data?: DocumentStatusResponse;
  dataState: DataState;
};

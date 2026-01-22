import type store from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DataState = "idle" | "pending" | "fulfilled" | "rejected";

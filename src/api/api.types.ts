import type { z, ZodType } from "zod";

export type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type ServiceConfig = Record<
  string,
  {
    method: HttpRequestMethod;
    url: string;
    responseSchema: ZodType;
  }
>;

export type Service<T extends ServiceConfig> = {
  [K in keyof T]: (data?: unknown) => Promise<z.infer<T[K]["responseSchema"]>>;
};

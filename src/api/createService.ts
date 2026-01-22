import { ZodError } from "zod";
import { BASE_URL } from "@constants";
import type { Service, ServiceConfig } from "./api.types";

function createService<T extends ServiceConfig>(config: T): Service<T> {
  return Object.keys(config).reduce(
    (service, key) => {
      const { method, url, responseSchema } = config[key];
      service[key] = async (data?: unknown) => {
        const finalUrl = `${BASE_URL}${url}`;

        try {
          const response = await fetch(finalUrl, {
            method,
            headers: { "Content-Type": "application/json" },
            ...(data ? { body: JSON.stringify(data) } : {}),
          });

          if (!response.ok) {
            // TODO: Handle API error
            throw new Error(`Request failed with code ${response.status}`);
          }

          const json = await response.json();
          return responseSchema.parse(json);
        } catch (e) {
          if (e instanceof ZodError) {
            // TODO: Handle validation error
          }
          throw e;
        }
      };

      return service;
    },
    {} as Record<string, (data?: unknown) => Promise<unknown>>,
  ) as Service<T>;
}

export default createService;

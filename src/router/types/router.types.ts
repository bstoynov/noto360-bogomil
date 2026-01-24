import type { ROUTES } from "../constants/router.constants";

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

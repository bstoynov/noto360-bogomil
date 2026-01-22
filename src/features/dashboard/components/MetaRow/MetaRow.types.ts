import type { ReactNode } from "react";

export type MetaRowProps = { label: string } & (
  | { textValue: string; customValue?: never }
  | { textValue?: never; customValue: ReactNode }
);

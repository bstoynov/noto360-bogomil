import type { ReactNode } from "react";

export type CardProps = {
  title: string;
  subtitle?: string;
  actionComponent?: ReactNode;
  children: ReactNode;
};

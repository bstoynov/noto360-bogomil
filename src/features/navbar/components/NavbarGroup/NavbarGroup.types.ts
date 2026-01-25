import type { NavbarGroupItem } from "@features/navbar/types";

export type NavbarGroupProps = NavbarGroupItem & {
  onNavigation?: () => void;
};

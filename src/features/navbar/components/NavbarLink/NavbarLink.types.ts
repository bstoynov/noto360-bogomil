import type { NavbarLinkItem } from "@features/navbar/types";

export type NavbarLinkProps = NavbarLinkItem & {
  onNavigation?: () => void;
};

import type { IconName } from "@ui";
import type { AppRoute } from "@router/types";

export type NavbarLinkItem = {
  iconName: IconName;
  text: string;
  to: AppRoute;
};

export type NavbarGroupItem = {
  groupName: string;
  items: NavbarLinkItem[];
};

export type NavbarConfig = NavbarGroupItem[];

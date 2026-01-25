import { ROUTES } from "@router/constants";
import type { NavbarConfig } from "../types/navbar.types";

export const navbarConfig: NavbarConfig = [
  {
    groupName: "Main",
    items: [
      { iconName: "home", text: "Dashboard", to: ROUTES.Dashboard.path },
      { iconName: "file", text: "Cases", to: ROUTES.Cases.path },
      { iconName: "search", text: "Legal Search", to: ROUTES.LegalSearch.path },
      { iconName: "layout", text: "Smart Review", to: ROUTES.SmartReview.path },
    ],
  },
  {
    groupName: "Analytics",
    items: [
      {
        iconName: "chart",
        text: "Compliance View",
        to: ROUTES.Compliance.path,
      },
      { iconName: "clipboard", text: "Legal Forms", to: ROUTES.Forms.path },
    ],
  },
  {
    groupName: "Management",
    items: [
      { iconName: "users", text: "Team", to: ROUTES.Team.path },
      { iconName: "flow", text: "Integrations", to: ROUTES.Integrations.path },
    ],
  },
  {
    groupName: "Other",
    items: [
      { iconName: "settings", text: "Settings", to: ROUTES.Settings.path },
      { iconName: "help", text: "Support Center", to: ROUTES.Support.path },
    ],
  },
];

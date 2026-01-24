import { ROUTES } from "@router/constants";
import type { NavbarConfig } from "../types/navbar.types";

export const navbarConfig: NavbarConfig = [
  {
    groupName: "Main",
    items: [
      { iconName: "home", text: "Dashboard", to: ROUTES.Dashboard },
      { iconName: "file", text: "Cases", to: ROUTES.Cases },
      { iconName: "search", text: "Legal Search", to: ROUTES.LegalSearch },
      { iconName: "layout", text: "Smart Review", to: ROUTES.SmartReview },
    ],
  },
  {
    groupName: "Analytics",
    items: [
      {
        iconName: "chart",
        text: "Compliance View",
        to: ROUTES.Compliance,
      },
      { iconName: "clipboard", text: "Legal Forms", to: ROUTES.Forms },
    ],
  },
  {
    groupName: "Management",
    items: [
      { iconName: "users", text: "Team", to: ROUTES.Team },
      { iconName: "flow", text: "Integrations", to: ROUTES.Integrations },
    ],
  },
  {
    groupName: "Other",
    items: [
      { iconName: "settings", text: "Settings", to: ROUTES.Settings },
      { iconName: "help", text: "Support Center", to: ROUTES.Support },
    ],
  },
];

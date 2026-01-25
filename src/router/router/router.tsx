import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@layout";
import { ROUTES } from "@router/constants";
import { DashboardPage, ConstructionPage } from "@features/dashboard/pages";

const router = createBrowserRouter([
  {
    path: ROUTES.Dashboard,
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: ROUTES.Cases, element: <ConstructionPage /> },
      { path: ROUTES.LegalSearch, element: <ConstructionPage /> },
      { path: ROUTES.SmartReview, element: <ConstructionPage /> },
      { path: ROUTES.Compliance, element: <ConstructionPage /> },
      { path: ROUTES.Forms, element: <ConstructionPage /> },
      { path: ROUTES.Team, element: <ConstructionPage /> },
      { path: ROUTES.Integrations, element: <ConstructionPage /> },
      { path: ROUTES.Settings, element: <ConstructionPage /> },
      { path: ROUTES.Support, element: <ConstructionPage /> },
    ],
  },
]);

export default router;

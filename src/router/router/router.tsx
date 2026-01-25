import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@layout";
import { ROUTES } from "@router/constants";
import { DashboardPage, ConstructionPage } from "@features/dashboard/pages";

const router = createBrowserRouter([
  {
    path: ROUTES.Dashboard.path,
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: ROUTES.Cases.path, element: <ConstructionPage /> },
      { path: ROUTES.LegalSearch.path, element: <ConstructionPage /> },
      { path: ROUTES.SmartReview.path, element: <ConstructionPage /> },
      { path: ROUTES.Compliance.path, element: <ConstructionPage /> },
      { path: ROUTES.Forms.path, element: <ConstructionPage /> },
      { path: ROUTES.Team.path, element: <ConstructionPage /> },
      { path: ROUTES.Integrations.path, element: <ConstructionPage /> },
      { path: ROUTES.Settings.path, element: <ConstructionPage /> },
      { path: ROUTES.Support.path, element: <ConstructionPage /> },
    ],
  },
]);

export default router;

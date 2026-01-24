import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "@features/dashboard/components";
import { AppLayout } from "@layout";
import { ROUTES } from "@router/constants";

const router = createBrowserRouter([
  {
    path: ROUTES.Dashboard,
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      // TODO: create lottie page in the works component
      { path: ROUTES.Cases, element: <div>Cases</div> },
      { path: ROUTES.LegalSearch, element: <div>Legal Search</div> },
      { path: ROUTES.SmartReview, element: <div>Smart Review</div> },
      { path: ROUTES.Compliance, element: <div>Compliance View</div> },
      { path: ROUTES.Forms, element: <div>Legal Forms</div> },
      { path: ROUTES.Team, element: <div>Team</div> },
      { path: ROUTES.Integrations, element: <div>Integrations</div> },
      { path: ROUTES.Settings, element: <div>Settings</div> },
      { path: ROUTES.Support, element: <div>Support Center</div> },
    ],
  },
]);

export default router;

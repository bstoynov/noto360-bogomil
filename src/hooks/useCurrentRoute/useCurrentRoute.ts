import { useLocation } from "react-router-dom";
import { ROUTES } from "@router/constants";

const useCurrentRoute = () => {
  const { pathname } = useLocation();
  return Object.values(ROUTES).find((r) => r.path === pathname);
};

export default useCurrentRoute;

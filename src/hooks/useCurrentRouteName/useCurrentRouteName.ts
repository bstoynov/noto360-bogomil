import { useLocation } from "react-router-dom";
import { ROUTES } from "@router/constants";

const useCurrentRouteName = () => {
  const { pathname } = useLocation();
  return Object.values(ROUTES).find((r) => r.path === pathname)?.name;
};

export default useCurrentRouteName;

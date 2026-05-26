import { ROUTES } from "@/constants/routes";
import { Navigate, type RouteObject } from "react-router";

export const anyRoute: RouteObject = {
  path: ROUTES.AnyRoute,
  element: <Navigate to={ROUTES.NotFound} replace={true} />,
};

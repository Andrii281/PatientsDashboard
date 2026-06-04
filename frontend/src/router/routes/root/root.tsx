import { ROUTES } from "@/constants/routes";
import { Navigate, type RouteObject } from "react-router";

export const rootRoute: RouteObject = {
  path: ROUTES.Root,
  element: <Navigate to={ROUTES.Patients} replace={true} />,
};

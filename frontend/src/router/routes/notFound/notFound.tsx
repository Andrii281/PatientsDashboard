import { type RouteObject } from "react-router";
import { ROUTES } from "@/constants/routes";
import { NotFoundPage } from "@/pages/notFound/notFound";

export const notFoundRoute: RouteObject = {
  path: ROUTES.NotFound,
  element: <NotFoundPage />,
};

import { ROUTES } from "@/constants/routes";
import { PatientsPage } from "@/pages/patients/patients";
import { type RouteObject } from "react-router";

export const patientsRoute: RouteObject = {
  path: ROUTES.Patients,
  element: <PatientsPage />,
};

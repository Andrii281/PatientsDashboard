import { ROUTES } from "@/constants/routes";
import { PatientPage } from "@/pages/patient/patient";
import { type RouteObject } from "react-router";

export const patientRoute: RouteObject = {
  path: ROUTES.PatientsId(),
  element: <PatientPage />,
};

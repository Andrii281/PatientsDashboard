import { createBrowserRouter, type DataRouter } from "react-router";
import { anyRoute } from "./routes/anyRoute/anyRoute";
import { notFoundRoute } from "./routes/notFound/notFound";
import { patientsRoute } from "./routes/patients/patients";
import { patientRoute } from "./routes/patient/patient";

export const appRouter: DataRouter = createBrowserRouter([
  patientsRoute,
  patientRoute,
  notFoundRoute,
  anyRoute,
]);

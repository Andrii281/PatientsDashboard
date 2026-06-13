import { createBrowserRouter } from "react-router";
import { anyRoute } from "./routes/anyRoute/anyRoute";
import { notFoundRoute } from "./routes/notFound/notFound";
import { rootRoute } from "./routes/root/root";
import { patientsRoute } from "./routes/patients/patients";
import { patientRoute } from "./routes/patient/patient";

export const appRouter = createBrowserRouter([
  rootRoute,
  patientsRoute,
  patientRoute,
  notFoundRoute,
  anyRoute,
]);

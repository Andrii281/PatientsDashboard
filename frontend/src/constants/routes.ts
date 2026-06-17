export const ROUTES = {
  Root: "/",

  Patients: "/patients/hospitalizations",

  PatientsId: (id?: string | number): string =>
    id ? `/patients/${id}` : "/patients/:id",

  NotFound: "/not-found",

  AnyRoute: "*",
};

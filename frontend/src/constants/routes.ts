export const ROUTES = {
  Root: "/",

  Patients: "/patients",

  PatientsId: (id?: string | number): string =>
    id ? `/patients/${id}` : "/patients/:id",

  NotFound: "/not-found",

  AnyRoute: "*",
};

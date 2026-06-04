import { useEffect, useState } from "react";
import { patientsApi } from "./api/patientsApi";
import { type IPatient } from "./types/IPatient";

import { RouterProvider } from "react-router/dom";

import { AppRouter } from "./router/appRouter";

function App() {
  const [patients, setPatients] = useState<IPatient[]>([]);

  useEffect(() => {
    patientsApi.getAll().then((data) => {
      console.log("data:", data);
      setPatients(data);
    });
  }, []);

  useEffect(() => {
    console.log("patients:", patients);
  }, [patients]);

  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

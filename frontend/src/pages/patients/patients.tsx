import { useStore } from "@/contexts/store/store";
import { EStoreState } from "@/types/EStoreState";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { PatientsList } from "./components/patientsList";

export const PatientsPage = observer(() => {
  const { patientsStore } = useStore();

  if (patientsStore.status !== EStoreState.Success) {
    patientsStore.fetch();
  }

  useEffect(() => {
    console.log("patientsStore.status:", patientsStore.status);
  }, [patientsStore.status]);

  return (
    <>
      {patientsStore.status === EStoreState.Success && (
        <Stack sx={{ padding: "0.8rem 10rem 0 10rem" }}>
          <PatientsList patients={patientsStore.patients} />
        </Stack>
      )}
    </>
  );
});

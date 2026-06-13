import { Stack } from "@mui/material";

import { EStoreStatus } from "@/types/EStoreStatus";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchPatients } from "@/store/patients/actions";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { PatientsList } from "./components/patientsList";

export const PatientsPage = () => {
  const dispath = useAppDispatch();

  const patientsStatus = useAppSelector((state) => state.patients.status);
  const patients = useAppSelector((state) => state.patients.patients);

  if (patientsStatus === EStoreStatus.Idle) {
    dispath(fetchPatients());
  }

  return (
    <>
      {patientsStatus === EStoreStatus.Success && (
        <Stack sx={{ padding: "0.8rem 10rem 0 10rem" }}>
          <PatientsList patients={patients} />
        </Stack>
      )}
    </>
  );
};

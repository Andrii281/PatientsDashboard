import type { IPatient } from "@/types/IPatient";
import { Stack } from "@mui/material";
import { Patient } from "./patient";

interface IPatientsList {
  patients: IPatient[];
}

export const PatientsList = ({ patients }: IPatientsList) => {
  return (
    <Stack
      sx={{
        "& > *:not(:last-child)": {
          margin: "0 0 1rem 0",
        },
      }}
      direction="column"
    >
      {patients.map((patient) => (
        <Patient
          key={patient.subject_id}
          id={patient.subject_id}
          firstName={patient.first_name}
          lastName={patient.last_name}
          gender={patient.gender}
          anchorAge={patient.anchor_age}
          anchorYear={patient.anchor_year}
        />
      ))}
    </Stack>
  );
};

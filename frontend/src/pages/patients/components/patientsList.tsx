import { type IPatient } from "@/types/IPatient";
import { Stack } from "@mui/material";
import { Patient } from "./patient";

interface IPatientsListProps {
  patients: IPatient[];
}

export const PatientsList = ({ patients }: IPatientsListProps) => {
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
          key={patient.subjectId}
          id={patient.subjectId}
          firstName={patient.firstName}
          lastName={patient.lastName}
          gender={patient.gender}
          anchorAge={patient.anchorAge}
          anchorYear={patient.anchorYear}
          admissions={patient.admissions}
        />
      ))}
    </Stack>
  );
};

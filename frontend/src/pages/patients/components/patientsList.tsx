import { type TPatient } from "@/types/TPatient";
import { Stack } from "@mui/material";
import { Patient } from "./patient";

type TPatientsListProps = {
  patients: TPatient[];
};

export const PatientsList = ({ patients }: TPatientsListProps) => {
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

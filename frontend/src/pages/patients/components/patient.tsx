import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { type TAdmissions } from "@/shared/types/TAdmissions";
import { Link } from "react-router-dom";
import { Admission } from "./admission";
import { ROUTES } from "@/constants/routes";
import { InfoField } from "./infoField";

type TPatientProps = {
  id: number;

  firstName: string;

  lastName: string;

  gender: "M" | "F";

  anchorAge: number;

  anchorYear: number;

  admissions: TAdmissions[];
};

export const Patient = ({
  firstName,
  lastName,
  anchorAge,
  gender,
  admissions,
}: TPatientProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
        <Stack
          direction="row"
          spacing={8}
          sx={{
            borderRadius: 4,
            padding: "0.2rem 1rem 0.2rem 1rem",
          }}
        >
          <InfoField label="name" value={`${firstName} ${lastName}`} />
          <InfoField label="age" value={anchorAge} />
          <InfoField label="gender" value={gender} />
          <InfoField label="hospitalizations" value={admissions.length} />
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          sx={{
            "& > *:not(:last-child)": {
              margin: "0 0 1.2rem 0",
            },
          }}
        >
          {admissions.map((admission) => (
            <Link
              to={ROUTES.PatientsId(admission.hadmId)}
              key={admission.hadmId}
            >
              <Admission
                admissionType={admission.admissionType}
                admittime={admission.admittime}
              />
            </Link>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

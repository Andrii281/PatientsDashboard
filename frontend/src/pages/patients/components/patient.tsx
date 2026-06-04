import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { type IAdmission } from "@/types/IAdmission";
import { Link } from "react-router-dom";
import { Admission } from "./admission";
import { ROUTES } from "@/constants/routes";

interface IPatientProps {
  id: number;

  firstName: string;

  lastName: string;

  gender: "M" | "F";

  anchorAge: number;

  anchorYear: number;

  admissions: IAdmission[];
}

export const Patient = ({
  firstName,
  lastName,
  gender,
  admissions,
}: IPatientProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            border: "0.1rem solid red",
            borderRadius: 4,
            padding: "0.2rem 1rem 0.2rem 1rem",
          }}
        >
          <Box>
            Name: {firstName} {lastName}
          </Box>
          <Box>gender: {gender}</Box>
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

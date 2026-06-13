import { Stack, Typography } from "@mui/material";

type TAdmissionProps = {
  admissionType: string;
  admittime: string;
};

export const Admission = ({ admissionType, admittime }: TAdmissionProps) => {
  const formattedAdmittime = new Date(admittime).toLocaleString("uk-UA");

  return (
    <Stack
      sx={{
        border: "2px solid black",
        padding: "0.125rem 0.125rem 0.125rem 0.125rem",
      }}
    >
      <Typography>Admission type: {admissionType}</Typography>
      <Typography>Admittime: {formattedAdmittime}</Typography>
    </Stack>
  );
};

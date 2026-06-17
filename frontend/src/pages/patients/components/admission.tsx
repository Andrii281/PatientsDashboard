import { Stack, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

type TAdmissionProps = {
  admissionType: string;
  admittime: string;
};

export const Admission = ({ admissionType, admittime }: TAdmissionProps) => {
  const date = new Date(admittime);
  const formattedAdmittime = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  return (
    <Stack
      direction="row"
      sx={{
        border: "2px solid black",
        padding: "0.225rem 1.125rem 0.225rem 0.5rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack spacing={0.3}>
        <Typography>
          Hospitalization type:{" "}
          <Typography component="span" sx={{ fontWeight: "bold" }}>
            {admissionType}
          </Typography>
        </Typography>
        <Typography>Admitted at: {formattedAdmittime}</Typography>
      </Stack>
      <LaunchIcon />
    </Stack>
  );
};

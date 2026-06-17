import { Typography } from "@mui/material";

type TInfoFieldProps = {
  label: string;

  value: string | number | null;
};

export const InfoField = ({ label, value }: TInfoFieldProps) => {
  return (
    <Typography>
      <Typography
        component="span"
        sx={{ fontStyle: "italic", textTransform: "capitalize", mr: 2 }}
      >
        {label}:
      </Typography>
      <Typography component="span">{value}</Typography>
    </Typography>
  );
};

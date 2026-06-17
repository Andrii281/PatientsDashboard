import { Stack, Typography } from "@mui/material";

type TProfileDetailsProps = {
  label: string;
  value: string | number | null;
};

export const ProfileDetails = ({ label, value }: TProfileDetailsProps) => {
  return (
    <Stack direction="row">
      <Typography
        component="span"
        sx={{ fontSize: "1.1rem", fontWeight: "bold", width: "9rem" }}
      >
        {label}:
      </Typography>

      <Typography component="span" sx={{ fontSize: "1.1rem" }}>
        {value}
      </Typography>
    </Stack>
  );
};

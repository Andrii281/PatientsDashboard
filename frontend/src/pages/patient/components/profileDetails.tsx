import { Stack, Typography } from "@mui/material";

type TProfileDetailsProps = {
  label: string;
  value: string | number | null;
};

export const ProfileDetails = ({ label, value }: TProfileDetailsProps) => {
  return (
    <Stack direction="row">
      <Typography component="span" sx={{ fontWeight: "bold", width: "9rem" }}>
        {label}:
      </Typography>

      <Typography component="span">{value}</Typography>
    </Stack>
  );
};

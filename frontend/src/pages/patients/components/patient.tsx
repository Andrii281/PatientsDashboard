import { Box, Stack } from "@mui/material";

interface IPatientProps {
  id: number;

  firstName: string;

  lastName: string;

  gender: "M" | "F";

  anchorAge: number;

  anchorYear: number;
}

export const Patient = ({
  id,
  firstName,
  lastName,
  gender,
  anchorAge,
  anchorYear,
}: IPatientProps) => {
  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{
        border: "0.1rem solid red",
        borderRadius: 4,
        padding: "0.2rem 1rem 0.2rem 1rem",
      }}
    >
      <Box>Name: {firstName} {lastName}</Box>
      <Box>gender: {gender}</Box>
    </Stack>
  );
};

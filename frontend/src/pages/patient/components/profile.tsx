import { Stack } from "@mui/material";

import { ProfileDetails } from "./profileDetails";

type TProfileProps = {
  subjectId: number;
  firstName: string;
  lastName: string;
  gender: "M" | "F";
  age: number;
  language: string | null;
  maritalStatus: string | null;
  race: string | null;
};

export const Profile = ({
  subjectId,
  firstName,
  lastName,
  gender,
  age,
  language,
  maritalStatus,
  race,
}: TProfileProps) => {
  return (
    <Stack spacing={2.5} sx={{ padding: "1rem 0 0 1.4rem" }}>
      <ProfileDetails label="subjectId" value={subjectId} />
      <ProfileDetails label="firstName" value={firstName} />
      <ProfileDetails label="lastName" value={lastName} />
      <ProfileDetails label="gender" value={gender} />
      <ProfileDetails label="age" value={age} />
      <ProfileDetails label="race" value={race} />
      <ProfileDetails label="language" value={language} />
      <ProfileDetails label="maritalStatus" value={maritalStatus} />
    </Stack>
  );
};

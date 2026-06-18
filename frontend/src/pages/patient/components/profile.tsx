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
    <Stack spacing={2.5} sx={{ padding: "1rem 0 0 1.5rem" }}>
      <ProfileDetails label="Subject Id" value={subjectId} />
      <ProfileDetails label="First Name" value={firstName} />
      <ProfileDetails label="Last Name" value={lastName} />
      <ProfileDetails label="Gender" value={gender} />
      <ProfileDetails label="Age" value={age} />
      <ProfileDetails label="Race" value={race} />
      <ProfileDetails label="Language" value={language} />
      <ProfileDetails label="Marital Status" value={maritalStatus} />
    </Stack>
  );
};

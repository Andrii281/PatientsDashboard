export type TSendMessageProfileDTO = {
  subjectId: number;

  firstName: string;

  lastName: string;

  gender: "M" | "F";

  age: number;

  language: string | null;

  maritalStatus: string | null;

  race: string | null;
};

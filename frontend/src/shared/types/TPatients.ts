import { type TAdmissions } from "./TAdmissions";

export type TPatients = {
  subjectId: number;

  firstName: string;

  lastName: string;

  gender: "M" | "F";

  anchorAge: number;

  anchorYear: number;

  anchorYearGroup: string;

  dod: string | null;

  admissions: TAdmissions[];
};

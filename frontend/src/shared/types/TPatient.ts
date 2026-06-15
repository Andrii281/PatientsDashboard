import { type TAdmission } from "./TAdmission";

export type TPatient = {
  subjectId: number;

  firstName: string;

  lastName: string;

  gender: "M" | "F";

  anchorAge: number;

  anchorYear: number;

  anchorYearGroup: string;

  dod: string | null;

  admissions: TAdmission[];
};

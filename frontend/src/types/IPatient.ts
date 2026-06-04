import { type IAdmission } from "./IAdmission";

export interface IPatient {
  subjectId: number;

  firstName: string;

  lastName: string;

  gender: "M" | "F";

  anchorAge: number;

  anchorYear: number;

  anchorYearGroup: string;

  dod: string | null;

  admissions: IAdmission[];
}

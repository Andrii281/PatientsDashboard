import type { IAdmission } from "./IAdmission";

export interface IPatient {
    subject_id: number;

    first_name: string;

    last_name: string;

    gender: "M" | "F";

    anchor_age: number;

    anchor_year: number;

    anchor_year_group: string;

    dod: string | null;

    admissions: IAdmission[];
}
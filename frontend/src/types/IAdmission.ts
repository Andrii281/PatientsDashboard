export interface IAdmission {
    hadm_id: number;

    subject_id: number;

    admittime: string;

    dischtime: string;

    deathtime: string | null;

    admission_type: string;

    admit_provider_id: string;

    admission_location: string;

    discharge_location: string | null;

    insurance: string;

    language: string | null;

    marital_status: string | null;

    race: string | null;

    edregtime: string | null;

    edouttime: string | null;

    hospital_expire_flag: number
}
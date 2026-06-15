export type TAdmission = {
  hadmId: number;

  subjectId: number;

  admittime: string;

  dischtime: string;

  deathtime: string | null;

  admissionType: string;

  admitProviderId: string;

  admissionLocation: string;

  dischargeLocation: string | null;

  insurance: string;

  language: string | null;

  maritalStatus: string | null;

  race: string | null;

  edregtime: string | null;

  edouttime: string | null;

  hospitalExpireFlag: number;
};

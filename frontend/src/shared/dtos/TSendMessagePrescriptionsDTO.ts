export type TSendMessagePrescriptionsDTO = {
  drug: string;

  prodStrength: string;

  doseValRx: string;

  doseUnitRx: string;

  dosesPer24Hrs: string | null;

  route: string;
};

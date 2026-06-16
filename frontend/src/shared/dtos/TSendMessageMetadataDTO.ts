import { type TSendMessageLabEventsDTO } from "./TSendMessageLabEventsDTO";
import { type TSendMessagePrescriptionsDTO } from "./TSendMessagePrescriptionsDTO";
import { type TSendMessageProfileDTO } from "./TSendMessageProfileDTO";

export type TSendMessageMetadataDTO = {
  profile?: TSendMessageProfileDTO;

  labEvents?: TSendMessageLabEventsDTO[];

  prescriptions?: TSendMessagePrescriptionsDTO[];
};

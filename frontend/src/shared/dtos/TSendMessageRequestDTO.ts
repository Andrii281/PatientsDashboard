import { type EMessageAuthor } from "../types/EMessageAuthor";
import { type TSendMessageMetadataDTO } from "./TSendMessageMetadataDTO";

export type TSendMessageRequestDTO = {
  conversationId: string;

  text: string;

  author: EMessageAuthor;

  metadata: TSendMessageMetadataDTO;
};

import { type TMessages } from "../types/TMessages";

export type TSendMessageResponseDTO = {
  conversationId: string;

  message: TMessages;
};

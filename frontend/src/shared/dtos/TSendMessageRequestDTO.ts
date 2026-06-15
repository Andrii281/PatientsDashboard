import { type EMessageAuthor } from "@/shared/types/EMessageAuthor";

export type TSendMessageRequestDTO = {
  conversationId: string;

  text: string;

  author: EMessageAuthor;
};

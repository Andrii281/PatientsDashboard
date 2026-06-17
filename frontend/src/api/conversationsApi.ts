import { type TSendMessageRequestDTO } from "@/shared/dtos/TSendMessageRequestDTO";
import { type TSendMessageResponseDTO } from "@/shared/dtos/TSendMessageResponseDTO";
import { type TConversations } from "@/shared/types/TConversations";

const BASE_URL = import.meta.env.VITE_API_URL ?? "";

export const conversationsApi = {
  getByAdmissionId: async (admissionId: string): Promise<TConversations> =>
    fetch(`${BASE_URL}/conversations?admissionId=${admissionId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((data) => data.json()),
  sendMessage: async (
    dto: TSendMessageRequestDTO
  ): Promise<TSendMessageResponseDTO> =>
    fetch(`${BASE_URL}/conversations/message`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dto),
    }).then((data) => data.json()),
};

import { createAsyncThunk } from "@reduxjs/toolkit";

import { conversationsApi } from "@/api/conversationsApi";
import { UNEXPECTED_ERROR_MESSAGE } from "@/constants/unexpectedErrorMessage";
import { type TSendMessageRequestDTO } from "@/shared/dtos/TSendMessageRequestDTO";
import { type TConversations } from "@/shared/types/TConversations";
import { type TSendMessageResponseDTO } from "@/shared/dtos/TSendMessageResponseDTO";

export const fetchConversation = createAsyncThunk<
  TConversations,
  string,
  { rejectValue: string }
>(
  "conversations/fetchConversation",
  async (admissionId: string, { rejectWithValue }) => {
    try {
      return await conversationsApi.getByAdmissionId(admissionId);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : UNEXPECTED_ERROR_MESSAGE
      );
    }
  }
);

export const sendMessage = createAsyncThunk<
  TSendMessageResponseDTO,
  TSendMessageRequestDTO,
  { rejectValue: string }
>(
  "conversations/sendMessage",
  async (dto: TSendMessageRequestDTO, { rejectWithValue }) => {
    try {
      return await conversationsApi.sendMessage(dto);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : UNEXPECTED_ERROR_MESSAGE
      );
    }
  }
);

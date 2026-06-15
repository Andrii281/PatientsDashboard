import { v4 as uuidv4 } from "uuid";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { EStoreStatus } from "@/shared/types/EStoreStatus";
import { type TConversations } from "@/shared/types/TConversations";
import { type TSendMessageResponseDTO } from "@/shared/dtos/TSendMessageResponseDTO";
import { fetchConversation, sendMessage } from "./actions";
import { EMessageAuthor } from "@/shared/types/EMessageAuthor";

type TConversationsSliceState = {
  conversation: TConversations | null;
  status: EStoreStatus;
  messageSendingStatus: EStoreStatus;
};

const initialState: TConversationsSliceState = {
  conversation: null,
  status: EStoreStatus.Idle,
  messageSendingStatus: EStoreStatus.Idle,
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    createUserMessage: (state, action: PayloadAction<string>) => {
      if (state.conversation === null) return;
      state.conversation.messages.push({
        messageId: uuidv4(),
        text: action.payload,
        author: EMessageAuthor.User,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConversation.pending, (state) => {
      state.status = EStoreStatus.Pending;
    });
    builder.addCase(
      fetchConversation.fulfilled,
      (state, action: PayloadAction<TConversations>) => {
        state.status = EStoreStatus.Success;
        state.conversation = action.payload;
      }
    );
    builder.addCase(fetchConversation.rejected, (state) => {
      state.status = EStoreStatus.Error;
      state.conversation = null;
    });
    builder.addCase(sendMessage.pending, (state) => {
      state.messageSendingStatus = EStoreStatus.Pending;
    });
    builder.addCase(
      sendMessage.fulfilled,
      (state, action: PayloadAction<TSendMessageResponseDTO>) => {
        state.messageSendingStatus = EStoreStatus.Success;
        if (state.conversation === null) return;
        if (state.conversation.conversationId !== action.payload.conversationId)
          return;
        state.conversation.messages.push(action.payload.message);
      }
    );
    builder.addCase(sendMessage.rejected, (state) => {
      state.messageSendingStatus = EStoreStatus.Error;
    });
  },
});

export const conversationsReducer = conversationsSlice.reducer;

export const { createUserMessage } = conversationsSlice.actions;

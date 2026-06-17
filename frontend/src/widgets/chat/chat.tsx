import * as React from "react";
import { Box, Stack } from "@mui/material";

import { MessageInput } from "./components/messageInput";
import { Conversation } from "./components/conversation";
import { EMessageAuthor } from "@/shared/types/EMessageAuthor";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchConversation } from "@/store/conversations/actions";
import { useAppSelector } from "@/hooks/useAppSelector";
import { EStoreStatus } from "@/shared/types/EStoreStatus";
import { createUserMessage } from "@/store/conversations/slice";

type TConversationProps = {
  admissionId: string;
  onSendMessage: (
    conversationId: string,
    text: string,
    author: EMessageAuthor
  ) => void;
};

export const Chat = ({ admissionId, onSendMessage }: TConversationProps) => {
  const dispath = useAppDispatch();

  const conversation = useAppSelector(
    (state) => state.conversations.conversation
  );
  const sendingMessageStatus = useAppSelector(
    (state) => state.conversations.messageSendingStatus
  );

  React.useLayoutEffect(() => {
    dispath(fetchConversation(admissionId));
  }, []);

  const handleSendMessage = (text: string) => {
    if (conversation === null) return;
    if (text.length === 0) return;
    dispath(createUserMessage(text));
    onSendMessage(conversation.conversationId, text, EMessageAuthor.User);
  };

  return (
    <>
      {conversation && (
        <Stack
          sx={{
            height: "100%",
          }}
        >
          <Box sx={{ flex: 1, minHeight: 0, height: "100%" }}>
            <Conversation messages={conversation.messages} />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <MessageInput
              onSendMessage={handleSendMessage}
              loading={sendingMessageStatus === EStoreStatus.Pending}
            />
          </Box>
        </Stack>
      )}
    </>
  );
};

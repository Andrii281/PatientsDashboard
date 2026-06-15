import * as React from "react";
import { Box, Stack } from "@mui/material";

import { MessageInput } from "./components/messageInput";
import { Conversation } from "./components/conversation";
import { EMessageAuthor } from "@/shared/types/EMessageAuthor";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchConversation, sendMessage } from "@/store/conversations/actions";
import { useAppSelector } from "@/hooks/useAppSelector";
import { EStoreStatus } from "@/shared/types/EStoreStatus";
import { createUserMessage } from "@/store/conversations/slice";

type TConversationProps = {
  admissionId: string;
};

export const Chat = ({ admissionId }: TConversationProps) => {
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

  const onSendMessage = (text: string) => {
    if (conversation === null) return;
    dispath(createUserMessage(text));
    dispath(
      sendMessage({
        conversationId: conversation.conversationId,
        text: text,
        author: EMessageAuthor.User,
      })
    );
  };

  return (
    <>
      {conversation && (
        <Stack
          sx={{
            height: "100%",
            padding: "0.2rem 0.6rem 0.2rem 0.6rem",
          }}
        >
          <Box sx={{ flex: 1, minHeight: 0, height: "100%" }}>
            <Conversation messages={conversation.messages} />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <MessageInput
              onSendMessage={onSendMessage}
              disabled={sendingMessageStatus === EStoreStatus.Pending}
            />
          </Box>
        </Stack>
      )}
    </>
  );
};

import * as React from "react";

import { EMessageAuthor } from "@/shared/types/EMessageAuthor";
import { type TMessages } from "@/shared/types/TMessages";
import { Box, Stack } from "@mui/material";
import { BotMessage } from "./botMessage";
import { UserMessage } from "./userMessage";

type TConversation = {
  messages: TMessages[];
};

export const Conversation = ({ messages }: TConversation) => {
  const converationContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (converationContainerRef.current) {
      converationContainerRef.current.scrollTo({
        top: converationContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <Stack sx={{ maxHeight: "100%", height: "100%" }}>
      <Stack
        spacing={2}
        sx={{
          padding: "0.6rem 0.6rem 0.6rem 0.6rem",
          borderLeft: "0.1rem solid #E7E7E7",
          borderBottom: "0.1rem solid #E7E7E7",
          background: "#F8FAFC",  
          height: "100%",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0.45rem",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "1rem",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
        ref={converationContainerRef}
      >
        {messages.map((message) => {
          if (message.author == EMessageAuthor.User) {
            return (
              <Box
                key={message.messageId}
                sx={{ alignSelf: "flex-start", maxWidth: "55%" }}
              >
                <UserMessage text={message.text} />
              </Box>
            );
          }
          if (message.author == EMessageAuthor.Bot) {
            return (
              <Box
                key={message.messageId}
                sx={{ alignSelf: "flex-end", maxWidth: "80%" }}
              >
                <BotMessage text={message.text} />
              </Box>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

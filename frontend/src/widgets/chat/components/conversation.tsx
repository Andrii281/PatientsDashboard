import { EMessageAuthor } from "@/shared/types/EMessageAuthor";
import { type TMessages } from "@/shared/types/TMessages";
import { Box, Stack } from "@mui/material";
import { BotMessage } from "./botMessage";
import { UserMessage } from "./userMessage";

type TConversation = {
  messages: TMessages[];
};

export const Conversation = ({ messages }: TConversation) => {
  return (
    <Stack sx={{ maxHeight: "100%", height: "100%" }}>
      <Stack
        spacing={1}
        sx={{
          padding: "0.6rem 0.6rem 0.6rem 0.6rem",
          border: "0.1rem solid black",
          height: "100%",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0.25rem",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        {messages.map((message) => {
          if (message.author == EMessageAuthor.User) {
            return (
              <Box sx={{ alignSelf: "flex-start", maxWidth: "75%" }}>
                <UserMessage text={message.text} />
              </Box>
            );
          }
          if (message.author == EMessageAuthor.Bot) {
            return (
              <Box sx={{ alignSelf: "flex-end", maxWidth: "75%" }}>
                <BotMessage text={message.text} />
              </Box>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

import { Box } from "@mui/material";
import { Markdown } from "@/components/markdown";

type TBotMessageProps = {
  text: string;
};

export const BotMessage = ({ text }: TBotMessageProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0.5rem 0.6rem 0.5rem 0.8rem",
        background: "#FFFFFF",
        border: "1px solid #D9E1EC",
        borderRadius: "1rem 0 1rem 1rem",
        boxShadow: "0 1px 2px rgba(16,24,40,0.06)",
      }}
    >
      <Markdown text={text} />
    </Box>
  );
};

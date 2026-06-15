import { Box } from "@mui/material";

type TBotMessageProps = {
  text: string;
};

export const BotMessage = ({ text }: TBotMessageProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0.5rem 0.6rem 0.5rem 0.8rem",
        border: "0.1rem solid black",
        borderRadius: "1rem 0 1rem 1rem",
      }}
    >
      {text}
    </Box>
  );
};

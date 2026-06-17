import { Box } from "@mui/material";

type TUserMessageProps = {
  text: string;
};

export const UserMessage = ({ text }: TUserMessageProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0.4rem 0.6rem 0.4rem 0.6rem",
        borderRadius: "0 1rem 1rem 1rem",
        background: "#3B82F6",
        color: "#FFFFFF"
      }}
    >
      {text}
    </Box>
  );
};

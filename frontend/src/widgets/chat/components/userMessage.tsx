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
        border: "0.1rem solid black",
        borderRadius: "0 1rem 1rem 1rem",
      }}
    >
      {text}
    </Box>
  );
};

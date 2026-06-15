import * as React from "react";
import { Button, TextField, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type TMessageInputProps = {
  onSendMessage: (text: string) => void;
  disabled: boolean;
};

export const MessageInput = ({
  onSendMessage,
  disabled,
}: TMessageInputProps) => {
  const [value, setValue] = React.useState<string>("");

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSendMessage = () => {
    setValue("");
    onSendMessage(value);
  };

  return (
    <Stack direction="row" spacing={1.4} sx={{ padding: "1rem 0 1rem 0" }}>
      <TextField
        fullWidth
        placeholder="Ask a question..."
        sx={{
          fontSize: "0.8rem",
          "& .MuiInputBase-input": { padding: "0.3rem 0.4rem 0.2rem 0.4rem" },
        }}
        disabled={disabled}
        value={value}
        onChange={(e) => handleChangeValue(e)}
      ></TextField>
      <Button
        variant="contained"
        sx={{
          padding: "0.2rem 0.6rem 0.2rem 0.6rem",
          minWidth: 0,
          minHeight: 0,
        }}
        onClick={handleSendMessage}
      >
        <SendIcon sx={{ fontSize: "1.3rem" }} />
      </Button>
    </Stack>
  );
};

import * as React from "react";
import { LoadingButton } from "@mui/lab";
import { TextField, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type TMessageInputProps = {
  onSendMessage: (text: string) => void;
  loading: boolean;
};

export const MessageInput = ({
  onSendMessage,
  loading,
}: TMessageInputProps) => {
  const [value, setValue] = React.useState<string>("");

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const isMounted = React.useRef<boolean>(false);

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  React.useEffect(() => {
    console.log("isMounted.current:", isMounted.current);
    console.log("isMounted.loading:", loading);
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (loading) return;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
    onSendMessage(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction="row"
        spacing={1.4}
        sx={{
          padding: "0.5rem 0.5rem 0.7rem 0.5rem",
          borderLeft: "0.1rem solid #E7E7E7",
        }}
      >
        <TextField
          fullWidth
          placeholder="Ask a question..."
          sx={{
            fontSize: "0.8rem",
            "& .MuiInputBase-input": { padding: "0.3rem 0.4rem 0.2rem 0.4rem" },
          }}
          disabled={loading}
          value={value}
          onChange={(e) => handleChangeValue(e)}
          inputRef={inputRef}
        ></TextField>
        <LoadingButton
          disabled={value.length === 0}
          loading={loading}
          variant="contained"
          sx={{
            padding: "0.2rem 0.6rem 0.2rem 0.6rem",
            minWidth: 0,
            minHeight: 0,
          }}
          type="submit"
        >
          <SendIcon sx={{ fontSize: "1.3rem" }} />
        </LoadingButton>
      </Stack>
    </form>
  );
};

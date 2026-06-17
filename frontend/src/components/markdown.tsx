import ReactMarkdown from "react-markdown";

type TMarkdownProps = {
  text: string;
};

export const Markdown = ({ text }: TMarkdownProps) => {
  return <ReactMarkdown>{text}</ReactMarkdown>;
};

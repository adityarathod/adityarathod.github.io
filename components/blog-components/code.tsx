import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export default function Code({ className, ...props }: CodeProps) {
  const match = /language-(\w+)/.exec(className || "");

  // Fix for extra newline added by MDX parser
  if (props.children && typeof props.children === "string") {
    props.children = props.children.replace(/\n$/, "");
  }
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      wrapLines
      showLineNumbers
      style={atomOneDark}
      {...(props as any)}
    />
  ) : (
    <code className={className} {...props} />
  );
}

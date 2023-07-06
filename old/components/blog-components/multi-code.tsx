import { useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import cl from "classnames";

interface MultiCodeProps {
  tabs: { name: string; content: string; [key: string]: unknown }[];
}

export default function MultiCode({ tabs }: MultiCodeProps) {
  const [curTab, setCurTab] = useState<number>(0);

  return (
    <section className="w-full p-2 bg-gray-700 rounded-md">
      <div className="flex flex-row mb-2">
        {tabs.map((tab, idx) => (
          <button
            className={cl(
              "py-1",
              "px-4",
              idx === curTab ? "bg-gray-900" : "hover:bg-gray-800",
              "min-w-[150px]",
              "rounded-md",
              "mr-4"
            )}
            key={idx}
            onClick={() => setCurTab(idx)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <ReactSyntaxHighlighter
        PreTag="pre"
        wrapLines
        showLineNumbers
        style={atomOneDark}
        customStyle={{
          padding: "1rem",
          margin: 0,
          borderRadius: "0.375rem",
        }}
        {...(tabs[curTab] as any)}
      >
        {tabs[curTab].content}
      </ReactSyntaxHighlighter>
    </section>
  );
}

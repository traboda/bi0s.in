'use client';
import React, {useContext} from "react";
import {Theme} from "../themeContext";
import { Poppins as Font} from "next/font/google";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import clsx from "clsx";

const font = Font({ subsets: ['latin'], weight: ['300', '600'] })


const MarkdownViewer = ({ content }: { content: string }) => {
  const { isDarkTheme } = useContext(Theme);
  return (
    <ReactMarkdown
      className={clsx(['markdown-body', font.className])}
      remarkPlugins={[remarkGfm,]}
      components={{
        h1: ({node, ...props}) => <h1 className="text-3xl font-bold my-3" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-2xl font-semibold my-3" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-xl font-semibold my-3" {...props} />,
        h4: ({node, ...props}) => <h4 className="text-lg font-semibold my-3" {...props} />,
        h5: ({node, ...props}) => <h5 className="text-base font-semibold my-3" {...props} />,
        h6: ({node, ...props}) => <h6 className="text-sm font-semibold my-3" {...props} />,
        b: ({node, ...props}) => <b className="font-semibold" {...props} />,
        p: ({node, ...props}) => <p className="text-base leading-7 text-justify mb-4" {...props} />,
        a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc list-outside ml-4" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-4" {...props} />,
        li: ({node, ...props}) => <li className="text-base leading-7 mb-2" {...props} />,
        img: ({node, ...props}) => <span className="flex justify-center my-3"><img draggable={false} {...props} /></span>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownViewer;
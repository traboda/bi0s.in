'use client';
import React, {useContext} from "react";
import Dynamic from "next/dynamic";
import {Theme} from "../themeContext";
import { Poppins as Font} from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
const font = Font({ subsets: ['latin'], weight: ['400', '700'] })

const MarkdownPreview = Dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});


const MarkdownViewer = ({ content }: { content: string }) => {
  const { isDarkTheme } = useContext(Theme);
  return (
    <MarkdownPreview
      wrapperElement={{
        'data-color-mode': isDarkTheme ? 'dark' : 'light',
      }}
      source={content}
      className={clsx(["markdown-body bg-transparent", font.className])}
      components={{
        img: ({node, ...props}) => {
          return (
            <div className="flex justify-center">
              {props.src && <img src={props.src} alt={props.alt || 'image'} className="my-3" />}
            </div>
          );
        }
      }}
    />
  );
}

export default MarkdownViewer;
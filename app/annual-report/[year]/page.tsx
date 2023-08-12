import React from 'react';
import { notFound } from 'next/navigation';
import { Poppins as Font} from "next/font/google";
const font = Font({ subsets: ['latin'], weight: ['400', '700'] })

import fetchContent from './fetch';
import MarkdownViewer from "../../shared/MarkdownViewer";
import clsx from "clsx";
import BlogMenu from "./menu";
import {Metadata} from "next";

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const content = await fetchContent({ slug: params?.year });
  if(!content?.content) {
    return {
      title: 'Not Found',
    };
  }
  return {
    title: content.title,
  };
};

const AnnualReportPage = async (props: { params: { year: string } }) => {

  const data = await fetchContent({ slug: props?.params?.year });
  if(!data?.content) {
    notFound();
  }

  return (
    <div className={clsx([font.className, "p-4 container max-w-[900px] mx-auto"])}>
      <section className="min-h-[25vmin] flex justify-center items-center py-[5vh] px-6">
        <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
          {data?.title}
        </h1>
      </section>
      <div className="flex flex-wrap mx-0">
        <div className="w-full md:w-1/4 lg:w-1/5 p-2">
          <BlogMenu titles={data?.titles} />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5 p-2">
          <div className="w-[800px] max-w-full mx-auto">
            <MarkdownViewer
              content={data?.content}
            />
          </div>
        </div>
      </div>
    </div>
  );

};

export default AnnualReportPage;
import { Metadata, ResolvingMetadata } from 'next';

import fetchContent from './fetch';

type Props = {
  params: { year: string }
};

export const generateMetadata = async (
  { params }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> => {
  const data = await parent;
  let title: string = `${data?.title?.absolute}`;
  const content = await fetchContent({ slug: params?.year });
  if(!content?.content) {
    return {
      title: 'Not Found',
    };
  }
  title = `${content.title} | ${title}`;
  return {
    title: title,
  };
};


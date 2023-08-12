const fetchContent = async ({ slug }: { slug: string }) => {
  try {
    const md = require(`../../../data/annual-reports/${slug}.md`) as string;
    const content = md.replace(/!\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
      return `![${p1}](/annual-report/2022/static/${p2})`;
    });

    // find all h2 titles and make a list
    const titles = <{ label: string, slug: string }[]>[];
    const regex = /## (.*$)/gm;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const name = match[1].trim();
      const slug = name.toLowerCase().replace(/ /g, '-');
      titles.push({
        label: name,
        slug: slug
      });
    }

    const { attributes, body } = require('front-matter')(content);

    return {
      title: attributes?.title,
      content: body,
      titles
    } as {
      title?: string
      content: string,
      titles: {
        label: string,
        slug: string
      }[]
    }
  }
  catch (error) {
    return undefined;
  }
};

export default fetchContent;

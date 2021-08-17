import remark from "remark";
import html from "remark-html";
// @ts-ignore
import oembed from "remark-oembed";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(oembed)
    // .use(chords)
    .use(html)
    .process(markdown);
  return result.toString();
}

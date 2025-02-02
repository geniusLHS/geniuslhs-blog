import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import readingTime from "reading-time"; // 읽기 시간 계산 라이브러리
import rehypeAutolinkHeadings from "rehype-autolink-headings"; // 제목에 자동으로 앵커 태그를 추가해주는 라이브러리
import rehypeSlug from "rehype-slug"; // 제목의 슬러그(slug) 생성을 위한 라이브러리
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown을 지원하기 위한 라이브러리
import GithubSlugger from "github-slugger"; // 슬러그(slug) 생성을 위한 라이브러리
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { readFileSync } from "fs";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tag: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    description: { type: "string", required: true },
    thumbnailUrl: { type: "string" },
    ogimage: { type: "string" },
  },
  computedFields: {
    // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    slug: { type: "string", resolve: (post) => post._raw.sourceFileName.split(".mdx")[0] },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkBreaks, // 마크다운에서 줄바꿈 하려면 space 두 번 쳐야 하는데, 이거 사용하면 마크다운에서 쓴 대로 줄바꿈이 됨.
      remarkGfm, // 취소선, 주석, 테이블 등등의 마크다운 추가 기능을 지원하는 플러그인
      remarkMath,
    ],
    rehypePlugins: [
      rehypeSlug, // 슬러그(slug) 생성을 위한 플러그인
      rehypeKatex,
      [
        rehypePrettyCode as any,
        {
          theme: JSON.parse(readFileSync("./code_theme/atom-one-light.json", "utf-8")),
          tokensMap: {
            fn: "entity.name.function",
            str: "string",
            var: "variable.other.constant",
            attr: "variable.other.readwrite",
          },
        },
      ],
      [
        rehypeAutolinkHeadings, // 제목에 자동으로 앵커 태그 추가를 위한 플러그인
        {
          properties: {
            className: ["anchor"],
          },
          behavior: "wrap",
        },
      ],
    ],
  },
});

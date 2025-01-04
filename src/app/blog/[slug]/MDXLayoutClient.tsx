"use client";

import { getMDXLayout, postComponents } from "@/components/mdx-components";

export default function MDXLayoutClient({ code }: { code: string }) {
  const MDXLayout = getMDXLayout(code);
  return <MDXLayout components={postComponents} />;
}

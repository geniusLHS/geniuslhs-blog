"use client";

import { getMDXLayout, postComponents } from "@/components/mdx-components";
import UseContext from "@/components/posts/minimal-rerendering-react-form/containers/WithContextAPI";

export default function MDXLayoutClient({ code }: { code: string }) {
  const MDXLayout = getMDXLayout(code);
  return (
    <>
      <div className="">
        <UseContext />
        <MDXLayout components={postComponents} />
      </div>
    </>
  );
}

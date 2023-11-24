import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { getMDXLayout, postComponents } from "@/components/mdx-components";
import dayjs from "dayjs";
import { PageSEO, BlogSEO } from "@/components/SEO";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post._raw.sourceFileName.split(".mdx")[0],
  }));
};

export default function PostLayout({ params }: Props) {
  const currentPost = allPosts.find((post) => post._raw.sourceFileName.split(".mdx")[0] === params.slug && post.category == "Blog");

  if (!currentPost) {
    notFound();
  }

  const MDXLayout = getMDXLayout(currentPost.body.code);

  return (
    <>
      <BlogSEO title={currentPost.title} summary={currentPost.description} date={currentPost.date} url={currentPost.url} />
      <div className="text-center pt-8 pb-8 mb-4 border-b border-b-[#898ea4]">
        <h1 className="text-4xl font-bold pb-5">{currentPost.title}</h1>
        <p className="text-lg">{currentPost.description}</p>
        <p className="text-gray-500">{dayjs(currentPost.date).format("YYYY. MM. DD")}</p>
      </div>
      <article className="w-full prose">
        <MDXLayout components={postComponents} />
      </article>
    </>
  );
}

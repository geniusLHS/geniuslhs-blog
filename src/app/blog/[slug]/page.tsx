import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { getMDXLayout, postComponents } from "@/components/mdx-components";
import dayjs from "dayjs";
import type { Metadata, ResolvingMetadata } from "next";

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

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const currentPost = allPosts.find((post) => post._raw.sourceFileName.split(".mdx")[0] === params.slug && post.category == "Blog");

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL("https://geniuslhs.com"),
    title: currentPost?.title ?? "geniusLHS - 블로그",
    description: currentPost?.description ?? "개인적인 작업과 생각들을 적어놓습니다.",
    openGraph: {
      title: currentPost?.title ?? "geniusLHS - 블로그",
      description: currentPost?.description ?? "개인적인 작업과 생각들을 적어놓습니다.",
      images: ["https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true"],
      url: "https://geniuslhs.com/blog/" + currentPost?.url,
      type: "website",
      siteName: "geniusLHS",
    },
  };
}

export default function PostLayout({ params }: Props) {
  const currentPost = allPosts.find((post) => post._raw.sourceFileName.split(".mdx")[0] === params.slug && post.category == "Blog");

  if (!currentPost) {
    notFound();
  }

  const MDXLayout = getMDXLayout(currentPost.body.code);

  return (
    <>
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

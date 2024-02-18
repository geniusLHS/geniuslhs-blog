import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { getMDXLayout, postComponents } from "@/components/mdx-components";
import supabase from "@/lib/supabase/public";
import dayjs from "dayjs";
import { LuEye, LuCalendar } from "react-icons/lu";
import { PostViews } from "@/components/PostViews";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post.slug,
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
      url: "https://geniuslhs.com/blog/" + currentPost?.slug,
      type: "website",
      siteName: "geniusLHS",
    },
  };
}

export default async function PostLayout({ params }: Props) {
  const currentPost = allPosts.find((post) => post.slug === params.slug && post.category == "Blog");

  if (!currentPost) {
    notFound();
  }

  const MDXLayout = getMDXLayout(currentPost.body.code);

  return (
    <>
      <div className="text-center pt-8 pb-8 mb-4 border-b border-b-[#898ea4]">
        <h1 className="text-4xl font-bold pb-5">{currentPost.title}</h1>
        <p className="text-lg">{currentPost.description}</p>
        <div className="text-gray-500">
          <div className="flex flex-row justify-center items-center">
            <LuCalendar className="mr-1" />
            {dayjs(currentPost.date).format("YYYY. MM. DD")}

            <PostViews category={"blog"} slug={params.slug} isVisit={true}></PostViews>
          </div>
        </div>
      </div>
      <article className="w-full prose">
        <MDXLayout components={postComponents} />
      </article>
    </>
  );
}

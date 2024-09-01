import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { getMDXLayout, postComponents } from "@/components/mdx-components";
import supabase from "@/lib/supabase/public";
import dayjs from "dayjs";
import { LuEye, LuCalendar } from "react-icons/lu";
import { PostViews } from "@/components/PostViews";
import Comments from "@/components/Comments";
import Link from "next/link";
import Image from "next/image";
import LogoIcon from "public/favicon.ico";

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
  const currentPost = allPosts.find((post) => post._raw.sourceFileName.split(".mdx")[0] === params.slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL("https://geniuslhs.com"),
    title: currentPost?.title ?? "geniusLHS",
    description: currentPost?.description ?? "이현서 개발 블로그",
    openGraph: {
      title: currentPost?.title ?? "geniusLHS",
      description: currentPost?.description ?? "이현서 개발 블로그",
      images: ["https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true"],
      url: "https://geniuslhs.com/blog/" + currentPost?.slug,
      type: "website",
      siteName: "geniusLHS",
    },
  };
}

export default async function PostLayout({ params }: Props) {
  const currentPost = allPosts.find((post) => post.slug === params.slug);

  if (!currentPost) {
    notFound();
  }

  const MDXLayout = getMDXLayout(currentPost.body.code);

  return (
    <>
      <section className="pt-3 md:pt-6 pb-6">
        <div className="text-lg">
          <Link href="/" className="">
            <Image src={LogoIcon} alt="logo" width={20} height={20} className="inline mr-2" />
            geniusLHS
          </Link>{" "}
          <Link href="/blog" className="">
            블로그
          </Link>
        </div>
      </section>
      <div className="pb-4 mb-4 flex flex-col items-center gap-1">
        <h1 className="text-3xl font-semibold text-black pt-2 pb-1 text-center">{currentPost.title}</h1>
        <p className="text-lg pb-1 text-center">{currentPost.description}</p>
        <div className="text-gray-500">
          <div className="flex flex-row justify-start items-center text-sm">
            <LuCalendar className="mr-1" />
            {dayjs(currentPost.date).format("YYYY. MM. DD.")}

            <PostViews className="ml-4" slug={params.slug} isVisit={true}></PostViews>
          </div>
        </div>
      </div>
      <article className="w-full prose">
        <MDXLayout components={postComponents} />
      </article>
      <Comments repo="geniusLHS/geniuslhs-blog" repoId="R_kgDOJ5C_5A" category="Announcements" categoryId="DIC_kwDOJ5C_5M4CdovT" />
    </>
  );
}

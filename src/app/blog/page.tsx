import dayjs from "dayjs";
import { allPosts, Post } from "contentlayer/generated";
import { phrases } from "@/data/phrases";
import PostItem from "@/components/PostItem";
import Head from "next/head";
import type { Metadata } from "next";
import LogoIcon from "public/favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { PostViews } from "@/components/PostViews";
import { LuCalendar } from "react-icons/lu";
import { Blog } from "@/components/Blog";

export const metadata: Metadata = {
  title: "geniusLHS",
  description: "이현서 개발 블로그",
  openGraph: {
    title: "geniusLHS",
    description: "이현서 개발 블로그",
    images: ["https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true"],
    url: "https://geniuslhs.com/blog/",
    type: "website",
    siteName: "geniusLHS",
  },
};

const getTags = (posts: Post[]) => {
  return Array.from(new Set(posts.flatMap((post) => post.tag))).sort();
};

export default function Post() {
  const getPosts = () => {
    const sortedPost = allPosts.sort((a, b) => dayjs(b.date).diff(a.date));
    return sortedPost;
  };

  const posts = getPosts();

  const tags = getTags(posts);

  return (
    <>
      <section className="pt-3 md:pt-6 pb-6">
        <div className="text-lg">
          <Link href="/" className="">
            <Image src={LogoIcon} alt="logo" width={20} height={20} className="inline mr-2" />
            geniusLHS
          </Link>{" "}
          블로그
        </div>
      </section>
      <Blog posts={posts} tags={tags} />
    </>
  );
}

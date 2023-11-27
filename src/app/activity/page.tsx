import dayjs from "dayjs";
import { allPosts, Post } from "contentlayer/generated";
import SubHeader from "@/components/SubHeader";
import { phrases } from "@/data/phrases";
import PostItem from "@/components/PostItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://geniuslhs.com"),
  title: "geniusLHS - 대외 활동",
  description: "대부분 집 밖에 나가서 한 활동들 입니다.",
  openGraph: {
    title: "geniusLHS - 대외 활동",
    description: "대부분 집 밖에 나가서 한 활동들 입니다.",
    images: ["https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true"],
    url: "https://geniuslhs.com",
    type: "website",
    siteName: "geniusLHS",
  },
};

export default function Post() {
  const getPosts = () => {
    const filteredPosts = allPosts.filter((post) => post.category == "Activity");
    const sortedPost = [...filteredPosts].sort((a, b) => dayjs(b.date).diff(a.date));
    return sortedPost;
  };

  const posts = getPosts();

  return (
    <>
      <SubHeader title={phrases.Activity.title} description={phrases.Activity.description}></SubHeader>
      <div className="pt-10 space-y-8">
        {posts.map((item) => (
          <PostItem {...item}></PostItem>
        ))}
      </div>
    </>
  );
}

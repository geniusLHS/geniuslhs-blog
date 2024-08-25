"use client";

import useSWR from "swr";
import { allPosts, Post } from "contentlayer/generated";
import { useEffect, useState } from "react";
import { LuEye, LuCalendar } from "react-icons/lu";
import dayjs from "dayjs";
import Link from "next/link";
import { PostViews } from "./PostViews";

interface Props {
  posts: Post[];
  tags: string[];
}

const splitByYear = (posts: Post[]) => {
  const splitPost: { [key: string]: Post[] } = {};

  posts.forEach((item) => {
    const year = dayjs(item.date).format("YYYY");
    if (!splitPost[year]) {
      splitPost[year] = [];
    }
    splitPost[year].push(item);
  });

  return Object.values(splitPost).sort((a, b) => dayjs(b[0].date).diff(a[0].date));
};

export const Blog = ({ posts, tags }: Props) => {
  const [tag, setTag] = useState("");

  const filteredPosts = posts.filter((post) => tag == "" || post.tag.includes(tag));

  const postsSplitByYear = splitByYear(filteredPosts);

  return (
    <>
      <div className="flex flex-row px-1 py-1 flex-wrap">
        <span className="px-2 no-underline hover:underline underline-offset-2 hover:cursor-pointer" onClick={() => setTag("")}>
          All
        </span>
        {tags.map((_tag, index) => (
          <a className={"px-2 hover:underline hover:cursor-pointer" + (tag === _tag ? " underline" : " no-underline")} onClick={() => setTag(_tag)}>
            {_tag}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-0 p-1">
        {postsSplitByYear.map((posts, index) => (
          <div className="flex flex-row pt-3 w-full">
            <div className="w-20 md:w-32 p-2">{dayjs(posts[0].date).format("YYYY")}</div>
            <div className="flex flex-col w-full group">
              {posts.map((post, index) => (
                <Link
                  href={"blog/" + post.slug}
                  className="pl-2 no-underline flex flex-row justify-between w-full rounded-lg transition-all py-2 group-hover:opacity-40 hover:!opacity-100"
                >
                  <div className="text-base">{post.title}</div>
                  <div className="flex flex-col md:flex-row ml-2">
                    <div className="text-sm w-11 mt-1 text-[#888] ">{dayjs(post.date).format("MM. DD.")}</div>
                    <PostViews className="w-11 md:ml-4 mt-1 text-sm" slug={post.slug} isVisit={false}></PostViews>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

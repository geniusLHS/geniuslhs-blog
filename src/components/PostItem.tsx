import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import supabase from "@/lib/supabase/public";
import dayjs from "dayjs";
import { LuEye, LuCalendar } from "react-icons/lu";
import { PostViews } from "./PostViews";

const PostItem = (post: Post) => {
  return (
    <Link
      href={"blog/" + post.slug}
      className="flex flex-nowrap no-underline w-full rounded-lg transition-all p-2 items-center bg-[#f8f8f8] hover:hover:bg-[#efefef]"
    >
      <div className="flex flex-col flex-nowrap items-start flex-1">
        <div className="text-lg font-bold">{post.title}</div>
        <div className="font-light break-words text-base md:text-base">{post.description}</div>
        <div className="text-xs mt-1 text-slate-500">
          <div className="flex flex-row justify-center items-center">
            <LuCalendar className="mr-1 -mt-0.5" height="0.777em" />
            {dayjs(post.date).format("YYYY. MM. DD.")}

            <PostViews slug={post.slug} isVisit={false}></PostViews>
          </div>
        </div>
      </div>
      <Image src={post.thumbnailUrl} className="rounded-lg m-1 thumbnail" alt="thumbnail" width={70} height={70} />
    </Link>
  );
};

export default PostItem;

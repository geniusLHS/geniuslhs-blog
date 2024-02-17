import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import supabase from "@/lib/supabase/public";
import dayjs from "dayjs";
import { LuEye, LuCalendar } from "react-icons/lu";
import LinkNoPrefetch from "./LinkNoPrefetch";

const PostItem = async (post: Post) => {
  const { data, error } = await supabase.from("analytics_views").select().eq("slug", `/${post.category.toLowerCase()}/${post.url}`).limit(1).single();

  return (
    <a
      href={post.category.toLowerCase() + "/" + post.url}
      className="flex flex-nowrap w-full rounded-lg transition-all py-2 px-4 items-center bg-[#f8f8f8] hover:hover:bg-[#efefef]"
    >
      <div className="flex flex-col flex-nowrap items-start flex-1">
        <div className="text-xl font-bold my-1">{post.title}</div>
        <div className="font-light break-words text-lg md:text-base">{post.description}</div>
        <div className="text-sm mt-1 text-slate-500">
          <div className="flex flex-row justify-center items-center">
            <LuCalendar className="mr-1 -mt-0.5" height="0.777em" />
            {dayjs(post.date).format("YYYY. MM. DD")}

            <LuEye className="ml-4 mr-1 -mt-[0.1rem]" height="0.777em" />
            {!error && data != null ? data.views : 0}
          </div>
        </div>
      </div>
      <Image src={post.thumbnailUrl} className="rounded-lg mx-3 thumbnail" alt="thumbnail" width={80} height={80} />
    </a>
  );
};

export default PostItem;

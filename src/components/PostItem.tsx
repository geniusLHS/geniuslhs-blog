'use client';

import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

const PostItem = (post: Post) => {
  return (
    <Link
      href={post.category.toLowerCase() + '/' + post.url}
      className="flex flex-nowrap w-full rounded-lg transition-all py-2 px-4 items-center bg-[#f8f8f8] hover:hover:bg-[#efefef]"
    >
      <div className="flex flex-col flex-nowrap items-start flex-1">
        <div className="text-xl font-bold my-1">{post.title}</div>
        <div className="font-light break-words text-lg md:text-base">{post.description}</div>
        <div className="text-sm mt-1 text-slate-500">{dayjs(post.date).format('YYYY. MM. DD')}</div>
      </div>
      <Image src={post.thumbnailUrl} className="rounded-lg mx-3" alt="thumbnail" width={80} height={80} />
    </Link>
  );
};

export default PostItem;

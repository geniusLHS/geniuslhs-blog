import dayjs from 'dayjs';
import { allPosts, Post } from 'contentlayer/generated';
import SubHeader from '@/components/SubHeader';
import { phrases } from '@/data/phrases';
import PostItem from '@/components/PostItem';
import Head from 'next/head';

export default function Post() {
  const getPosts = () => {
    const filteredPosts = allPosts.filter((post) => post.category == 'Blog');
    const sortedPost = [...filteredPosts].sort((a, b) => dayjs(b.date).diff(a.date));
    return sortedPost;
  };

  const posts = getPosts();

  return (
    <>
      <Head>
        <title>dkdk</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
      </Head>
      <SubHeader title={phrases.Blog.title} description={phrases.Blog.description}></SubHeader>
      <div className="pt-10 space-y-5">
        {posts.map((item) => (
          <PostItem {...item}></PostItem>
        ))}
      </div>
    </>
  );
}

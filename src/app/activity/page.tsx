import dayjs from 'dayjs';
import { allPosts, Post } from 'contentlayer/generated';
import SubHeader from '@/components/SubHeader';
import { phrases } from '@/data/phrases';
import PostItem from '@/components/PostItem';

export default function Post() {
  const getPosts = () => {
    const filteredPosts = allPosts.filter((post) => post.category == 'Activity');
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

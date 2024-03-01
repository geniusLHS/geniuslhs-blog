"use client";

import Giscus from "@giscus/react";

interface Props {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
}

const Comments = ({ repo, repoId, category, categoryId }: Props) => {
  return (
    <div className="mt-16">
      <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="noborder_light"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};

export default Comments;

"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import { LuEye, LuCalendar } from "react-icons/lu";

interface Props {
  slug: string;
  isVisit: boolean;
  className?: string;
}

export const PostViews = ({ slug, isVisit, className }: Props) => {
  const { data, error, isLoading } = useSWR(`/api/views?pathname=${encodeURIComponent(`/blog/${slug}`)}`, (url) => fetch(url).then((r) => r.json()));

  useEffect(() => {
    const res = isVisit
      ? fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pathname: `/blog/${slug}`,
          }),
        })
      : null;
  }, []);

  return (
    <div className={className}>
      <LuEye className="mr-1 inline" />
      {!error && data ? data.views : "-"}
    </div>
  );
};

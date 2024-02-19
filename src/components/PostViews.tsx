"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";
import { LuEye, LuCalendar } from "react-icons/lu";

interface Props {
  category: string;
  slug: string;
  isVisit: boolean;
}

export const PostViews = ({ category, slug, isVisit }: Props) => {
  const { data, error, isLoading } = useSWR(`/api/views?pathname=${encodeURIComponent(`/${category}/${slug}`)}`, (url) => fetch(url).then((r) => r.json()));

  useEffect(() => {
    const res = isVisit
      ? fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pathname: `/${category}/${slug}`,
          }),
        })
      : null;
  }, []);

  return (
    <>
      <LuEye className="ml-4 mr-1" />
      {!error && data ? data.views : "-"}
    </>
  );
};

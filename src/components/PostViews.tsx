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
  const { data, error, isLoading } = useSWR(`/api/view?slug=${encodeURIComponent(`/${category}/${slug}`)}`, (url) =>
    fetch(url, { method: "GET" }).then((r) => r.json())
  );

  useEffect(() => {
    const URL = process.env.NODE_ENV === "production" ? "https://geniuslhs.com/api/view" : "http://localhost:3000/api/view";
    const res = isVisit
      ? fetch(`${URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            slug: `/${category}/${slug}`,
          }),
        })
      : null;
  }, []);

  return (
    <>
      <LuEye className="ml-4 mr-1" />
      {!error && data ? data.view : 0}
    </>
  );
};

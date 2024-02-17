"use client";

import supabase from "@/lib/supabase/public";
import { LuEye, LuCalendar } from "react-icons/lu";

export default async function PostViews({ pathname }: { pathname: string }) {
  const slug = pathname.slice(pathname.indexOf("/")) || "/";

  const { data, error } = await supabase.from("analytics_views").select().eq("slug", pathname).limit(1).single();

  const URL = process.env.NODE_ENV === "production" ? "https://geniuslhs.com/api/view" : "http://localhost:3000/api/view";
  console.log(URL);

  const res = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug,
    }),
  });

  return (
    <>
      <LuEye className="ml-4 mr-1.5" />
      {!error && data != null ? data.views : 0}
    </>
  );
}

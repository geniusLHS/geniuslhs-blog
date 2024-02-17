import supabase from "@/lib/supabase/private";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const slug = decodeURIComponent(request.nextUrl.searchParams.get("slug") ?? "");

  const { data, error } = await supabase.rpc("get_views", { page_slug: slug });

  if (error) return Response.error();

  return Response.json({ view: data });
}

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();
    const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

    await supabase.rpc("new_visitor", { page_slug: slug, user_ip: ip });
  } catch (error) {
    return new Response(`Webhook error: ${error}`, {
      status: 400,
    });
  }

  return new Response("Success", {
    status: 200,
  });
}

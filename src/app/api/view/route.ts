import supabase from "@/lib/supabase/private";

export async function POST(request: Request) {
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

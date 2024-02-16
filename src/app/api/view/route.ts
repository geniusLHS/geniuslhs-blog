import supabase from "@/lib/supabase/private";

export async function POST(request: Request) {
  try {
    const { slug, ip } = await request.json();

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

import { NextMiddleware, NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";

export const middleware: NextMiddleware = async (request: NextRequest, event: NextFetchEvent) => {
  const pathname = request.nextUrl.pathname;

  const sendAnalytics = async () => {
    const slug = pathname.slice(pathname.indexOf("/")) || "/";
    const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

    const URL = process.env.NODE_ENV === "production" ? "https://geniuslhs.com/api/view" : "http://localhost:3000/api/view";
    console.log(URL);
    const res = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug,
        ip,
      }),
    });

    if (res.status !== 200) {
      console.error("Failed to send analytics", res);
    }
  };

  event.waitUntil(sendAnalytics());
  return NextResponse.next();
};

export const config = {
  matcher: ["/blog/:path+", "/activity/:path+"],
};

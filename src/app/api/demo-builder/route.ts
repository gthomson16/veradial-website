import { NextRequest, NextResponse } from "next/server";

const TIMEOUT_MS = 30_000;

export async function POST(request: NextRequest) {
  const apiBase = (
    process.env.DEMO_API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    ""
  ).replace(/\/$/, "");

  if (!apiBase) {
    return NextResponse.json(
      { error: "Demo builder API is not configured." },
      { status: 500 },
    );
  }

  const body = await request.text();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${apiBase}/api/v1/demo/builder/generate`, {
      method: "POST",
      headers: {
        "content-type":
          request.headers.get("content-type") ?? "application/json",
        "x-forwarded-for": request.headers.get("x-forwarded-for") ?? "",
        "x-real-ip": request.headers.get("x-real-ip") ?? "",
      },
      body,
      signal: controller.signal,
    });

    const responseBody = await response.text();
    return new NextResponse(responseBody, {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return NextResponse.json(
        { error: "Builder request timed out." },
        { status: 504 },
      );
    }
    return NextResponse.json(
      { error: "Builder upstream error." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}

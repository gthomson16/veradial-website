import { NextRequest, NextResponse } from "next/server";
import { DEMO_FUNNEL_CONTRACT_HEADER, DEMO_FUNNEL_CONTRACT_VERSION } from "@/lib/calls/contract";
import { createMockDemoCallResponse } from "@/lib/calls/mock";

export async function POST(request: NextRequest) {
  const useMock = process.env.NEXT_PUBLIC_USE_MOCK_CALLS !== "false";

  if (useMock) {
    return NextResponse.json(createMockDemoCallResponse(), {
      headers: {
        [DEMO_FUNNEL_CONTRACT_HEADER]: DEMO_FUNNEL_CONTRACT_VERSION,
      },
    });
  }

  const apiBase = (process.env.DEMO_API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? "")
    .replace(/\/$/, "");

  if (!apiBase) {
    return NextResponse.json(
      { error: "Demo API is not configured." },
      { status: 500 },
    );
  }

  const body = await request.text();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    const response = await fetch(`${apiBase}/api/v1/demo-calls`, {
      method: "POST",
      headers: {
        "content-type": request.headers.get("content-type") ?? "application/json",
        "x-forwarded-for": request.headers.get("x-forwarded-for") ?? "",
        "x-real-ip": request.headers.get("x-real-ip") ?? "",
        [DEMO_FUNNEL_CONTRACT_HEADER]: DEMO_FUNNEL_CONTRACT_VERSION,
      },
      body,
      signal: controller.signal,
    });

    const responseBody = await response.text();

    return new NextResponse(responseBody, {
      status: response.status,
      headers: {
        "content-type": response.headers.get("content-type") ?? "application/json",
        [DEMO_FUNNEL_CONTRACT_HEADER]:
          response.headers.get(DEMO_FUNNEL_CONTRACT_HEADER) ?? DEMO_FUNNEL_CONTRACT_VERSION,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Demo API did not respond." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}

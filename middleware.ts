import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.url.includes("jpg")) {
    console.log("middleware", request.url);
  }
  NextResponse.next();
}

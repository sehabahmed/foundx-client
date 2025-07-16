import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const AuthRoutes = ["/register", "/login"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   const user = {
//     name: "sehab",
//     toke: "abc def",
//     role: "user",
//   };

const user = undefined;

  

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin"],
};

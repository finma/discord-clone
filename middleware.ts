import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (
    isProtectedRoute(req) &&
    req.nextUrl.pathname !== "/sign-in" &&
    req.nextUrl.pathname !== "/sign-up"
  ) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next|api|trpc|sign-in|sign-up).*)",
    "/(api|trpc)(.*)",
    "/sign-in",
    "/sign-up",
    "/",
  ],
};

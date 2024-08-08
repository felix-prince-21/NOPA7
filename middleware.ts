import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/auth/onboarding','/sign-in','/sign-up', '/api/uploadthing','/api/webhook/clerk'],
  ignoredRoutes: ['/api/webhook/clerk',]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
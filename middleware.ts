import { next, rewrite } from "@vercel/edge";

/**
 * acceptmarkdown.com content negotiation.
 *
 * This has to run in middleware rather than as a `has: accept` rewrite in
 * vercel.json: Vercel resolves the filesystem *before* applying rewrites, so
 * the static index.html for each of these paths always won and the rewrite
 * never fired. Middleware runs ahead of the filesystem, so it can divert a
 * markdown request to the function that serves the markdown variant.
 *
 * `Vary: Accept` is set on every response by vercel.json (and again by the
 * markdown function) so caches never cross the two variants.
 */
export const config = {
  matcher: ["/", "/about", "/contact", "/privacy", "/developers"],
};

const NEGOTIABLE = new Set([
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/developers",
]);

export default function middleware(request: Request) {
  const accept = request.headers.get("accept") || "";

  // Only divert an explicit markdown preference. Browsers send
  // "text/html,...;q=0.9,*/*;q=0.8" and must keep getting HTML.
  if (!/\btext\/markdown\b/i.test(accept)) {
    return next({ headers: { Vary: "Accept, Accept-Encoding" } });
  }

  const { pathname } = new URL(request.url);
  const path = pathname.replace(/\/+$/, "") || "/";
  if (!NEGOTIABLE.has(path)) {
    return next({ headers: { Vary: "Accept, Accept-Encoding" } });
  }

  return rewrite(
    new URL(`/api/markdown?path=${encodeURIComponent(path)}`, request.url),
    { headers: { Vary: "Accept, Accept-Encoding" } }
  );
}

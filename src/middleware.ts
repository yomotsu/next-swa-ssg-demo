import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest): NextResponse {
  const healthPath = "/.swa/health.html";

  // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/sub";
  const basePath = "/sub";

  if (request.nextUrl.pathname === healthPath) {
    const rewrittenUrl = new URL(`${basePath}${healthPath}`, request.url);
    return NextResponse.rewrite(rewrittenUrl);
  }

  return NextResponse.next();
}

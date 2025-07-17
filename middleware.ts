import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { authenticateRequest } from "./lib/auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protected routes
  const adminRoutes = ["/admin/dashboard", "/admin/members"]
  const trainerRoutes = ["/trainer/dashboard", "/trainer/members"]
  const protectedApiRoutes = ["/api/admin", "/api/trainer", "/api/users", "/api/wellness-plans"]

  // Check if route needs authentication
  const needsAuth =
    adminRoutes.some((route) => pathname.startsWith(route)) ||
    trainerRoutes.some((route) => pathname.startsWith(route)) ||
    protectedApiRoutes.some((route) => pathname.startsWith(route))

  if (needsAuth) {
    const user = await authenticateRequest(request)

    if (!user) {
      // Redirect to appropriate login page
      if (pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      } else if (pathname.startsWith("/trainer")) {
        return NextResponse.redirect(new URL("/trainer/login", request.url))
      } else {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
    }

    // Check role-based access
    if (pathname.startsWith("/admin") && user.role !== "super_admin") {
      return NextResponse.redirect(new URL("/trainer/dashboard", request.url))
    }

    if (pathname.startsWith("/trainer") && user.role !== "trainer") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/trainer/:path*",
    "/api/admin/:path*",
    "/api/trainer/:path*",
    "/api/users/:path*",
    "/api/wellness-plans/:path*",
  ],
}

import { SignJWT, jwtVerify } from 'jose';
import type { NextRequest } from "next/server";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

export interface JWTPayload {
  userId: string;
  email: string;
  role: "super_admin" | "trainer";
  name: string;
}

export async function generateToken(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload as any)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as JWTPayload;
  } catch (error) {
    return null;
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }
  // Also check cookies
  const token = request.cookies.get("auth-token")?.value;
  return token || null;
}

export async function authenticateRequest(request: NextRequest): Promise<JWTPayload | null> {
  const token = getTokenFromRequest(request);
  if (!token) return null;
  return await verifyToken(token);
}

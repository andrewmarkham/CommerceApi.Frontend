export function decodeJwt(token: string): any | null {
  const parts = token?.split(".");
  if (!parts || parts.length < 2) return null;
  return safeDecodeSegment(parts[1]);
}
/**
 * Checks if a given JWT token has expired.
 *
 * @param token - The JWT token to check.
 * @returns `true` if the token is empty, undefined, or expired; otherwise, `false`.
 */
export function hasTokenExpired(token: string): boolean {
  if (!token?.trim()) return true;
  const decoded = decodeJwt(token);
  if (!decoded?.exp || typeof decoded.exp !== "number") return true;
  return Math.floor(Date.now() / 1000) >= decoded.exp;
}

function safeDecodeSegment(segment: string): any | null {
  try {
    const normalized = segment.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}
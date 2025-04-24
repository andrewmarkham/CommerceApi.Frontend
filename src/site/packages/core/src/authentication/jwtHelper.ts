export function decodeJwt(token: string): any {
  const tokenArray = token.split('.')
  return JSON.parse(atob(tokenArray[1]));
}

/**
 * Checks if a given JWT token has expired.
 *
 * @param token - The JWT token to check.
 * @returns `true` if the token is empty, undefined, or expired; otherwise, `false`.
 */
export function hasTokenExpired(token: string): boolean {
  
  if (isEmptyOrUndefined(token)) {
    console.log("TOKEN IS EMPTY OR UNDEFINED: ");
    return true;
  }
  const decodedToken = decodeJwt(token);
  return Math.floor(Date.now() / 1000) >= decodedToken?.exp;
}

function isEmptyOrUndefined(str: string | undefined): boolean {
  return !str || str.trim() === '';
}
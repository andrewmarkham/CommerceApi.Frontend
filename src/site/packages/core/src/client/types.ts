/**
 * Represents the response for a customer context.
 * 
 * @property {boolean} isAnonymous - Indicates whether the customer is anonymous.
 * @property {string} customerContext - The customer context.
 */
export type CustomerContextResponse = {
    isAnonymous: boolean;
    customerContext: string;
  }
  
/**
 * Represents the response received after an anonymous authentication request.
 * 
 * @property {string} tokenType - The type of token issued. Always "Bearer".
 * @property {string} accessToken - The access token issued for authentication.
 * @property {number} expiresIn - The duration (in seconds) for which the access token is valid.
 * @property {string} refreshToken - The token used to refresh the access token.
 */
export type AnonymousAuthenticationResponse = {
    tokenType : "Bearer";
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
  }
  
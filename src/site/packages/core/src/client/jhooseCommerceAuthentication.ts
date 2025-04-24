import { get, HttpError} from "../http";
import { AnonymousAuthenticationResponse, CustomerContextResponse } from "./types";


export class JhooseCommerceAuthentication {
  
    readonly token: string;
    readonly endpoint: string;

    constructor(
        endpoint: string, token: string = "") 
    {
        this.token = token;
        this.endpoint = endpoint;
    }

  /**
   * Retrieves the customer context from the storage or fetches it from the server if not available.
   * 
   * @returns {Promise<CustomerContextResponse | HttpError>} A promise that resolves to the customer context or an HTTP error.
   * 
   * The method first attempts to retrieve the customer context from local storage. If the customer context is found in storage,
   * it is returned immediately. If not, the method makes an HTTP GET request to fetch the customer context from the server.
   * Upon successful retrieval, the customer context is stored in local storage for future use.
   */
  async getCustomerContext(): Promise<CustomerContextResponse | HttpError> {
    
    const contextRequestUrl = `${this.endpoint}/commerceapi/authentication/customercontext`;

    const contentResponse = await get<CustomerContextResponse>(
      contextRequestUrl,
      this.token
    );

    return contentResponse ?? {code: "500", message: "Network Error"};
  }

  /**
   * Retrieves an anonymous user authentication response from the commerce API.
   *
   * @param authenticationKey - The key used for authentication.
   * @returns A promise that resolves to an `AnonymousAuthenticationResponse` if the request is successful,
   * or an `HttpError` if the request fails.
   *
   * @throws Will throw an error if the fetch request fails.
   */
  async getAnonymousUser(authenticationKey : string): Promise<AnonymousAuthenticationResponse | HttpError> {

    const authtRequestUrl = `${this.endpoint}/commerceapi/authentication/`;

    const error: HttpError = {} as HttpError;
    var anonymousId: string | null = null;

    const response = await fetch(authtRequestUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        "X-Auth-Key": authenticationKey
      },
      body: JSON.stringify({
        anonymousId: anonymousId
      }),
    }).catch((e) => {
      console.error('Error:', e);
      error.code = e.code;
      error.message = e.message;
    }); 
  
    if (response?.ok) {
      var autheResponse = await response.json() as AnonymousAuthenticationResponse;
      
      return autheResponse;
    } else {
      return {
        code : response?.status.toString() ?? "500",
        message : response?.statusText ?? "Network Error"
      };
    }
  }
}
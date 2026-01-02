import { HttpError } from "./types";


/**
 * Sends a POST request to the specified URL with the given body and headers.
 *
 * @template T - The expected response type.
 * @param {string} url - The URL to send the POST request to.
 * @param {any} body - The body of the POST request.
 * @param {string} token - The authorization token to be included in the request headers.
 * @param {string} customerContext - The customer context to be included in the request headers.
 * @param {boolean} [cache=false] - Whether to cache the response. Defaults to `false`.
 * @returns {Promise<T | HttpError | void>} - A promise that resolves to the response of type `T`, an `HttpError`, or `void`.
 */
async function post<T>(url: string, body: any, token: string, customerContext: string, cache: boolean = false) : Promise<T | HttpError | void> { 
    
    const error: HttpError = { code: "400", message: "Bad Request" };


    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        "X-Customer-Context": customerContext,
        "Authorization": `Bearer ${token}`
      },
      cache: cache ? 'force-cache' : 'no-store',
      body: JSON.stringify(body)
    }).catch((e) => {
      error.code = e?.code ?? "NETWORK_ERROR";
      error.message = e?.message ?? "Request failed";
      return undefined;
    }); 

    return await parseResponse(response, error);
  }

  /**
   * Sends an HTTP PUT request to the specified URL with the given body and headers.
   *
   * @template T - The expected response type.
   * @param {string} url - The URL to send the PUT request to.
   * @param {any} body - The body of the PUT request.
   * @param {string} token - The authorization token to include in the request headers.
   * @param {string} customerContext - The customer context to include in the request headers.
   * @param {boolean} [cache=false] - Whether to use cache for the request. Defaults to `false`.
   * @returns {Promise<T | HttpError | void>} - A promise that resolves to the response of type `T`, an `HttpError`, or `void`.
   */
  async function put<T>(url: string, body: any, token: string, customerContext: string, cache: boolean = false) : Promise<T | HttpError | void> { 
    
    const error: HttpError = { code: "400", message: "Bad Request" };

    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        "X-Customer-Context": customerContext,
        "Authorization": `Bearer ${token}`
      },
      cache: cache ? 'force-cache' : 'no-store',
      body: JSON.stringify(body)
    }).catch((e) => {
      error.code = e?.code ?? "NETWORK_ERROR";
      error.message = e?.message ?? "Request failed";
      return undefined;
    }); 
  
    return await parseResponse(response, error);
  }

  /**
   * Sends a PATCH request to the specified URL with the provided body and headers.
   * 
   * @template T - The expected response type.
   * @param {string} url - The URL to send the PATCH request to.
   * @param {any} body - The body of the PATCH request.
   * @param {string} token - The authorization token to include in the request headers.
   * @param {string} customerContext - The customer context to include in the request headers.
   * @returns {Promise<T | HttpError | void>} - A promise that resolves to the response of type T, an HttpError, or void.
   */
  async function patch<T>(url: string, body: any, token: string, customerContext: string) : Promise<T | HttpError | void> { 
    
    const error: HttpError = { code: "400", message: "Bad Request" };

    const response = await fetch(url, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        "X-Customer-Context": customerContext,
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }).catch((e) => {
      error.code = e?.code ?? "NETWORK_ERROR";
      error.message = e?.message ?? "Request failed";
      return undefined;
    }); 
  
    return await parseResponse(response, error);
  }
  async function get<T>(url: string, token: string, customerContext?: string) : Promise<T | HttpError | void> { 
    
    const error: HttpError = { code: "400", message: "Bad Request" };

    const response = await fetch(url, {
      headers: {
        "X-Customer-Context": customerContext ?? "",
        "Authorization": `Bearer ${token}`
      }
    }).catch((e) => {
      error.code = e?.code ?? "NETWORK_ERROR";
      error.message = e?.message ?? "Request failed";
      return undefined;
    }); 
  
    return await parseResponse(response, error);
  }

  /**
   * Sends an HTTP DELETE request to the specified URL.
   *
   * @template T - The expected response type.
   * @param {string} url - The URL to send the DELETE request to.
   * @param {string} token - The authorization token to include in the request headers.
   * @param {string} [customerContext] - Optional customer context to include in the request headers.
   * @returns {Promise<T | HttpError | void>} - A promise that resolves to the response of type T, an HttpError, or void.
   */
  async function remove<T>(url: string, token: string, customerContext?: string) : Promise<T | HttpError | void> { 
    
    const error: HttpError = { code: "400", message: "Bad Request" };

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "X-Customer-Context": customerContext ?? "",
        "Authorization": `Bearer ${token}`
      }
    }).catch((e) => {
      error.code = e?.code ?? "NETWORK_ERROR";
      error.message = e?.message ?? "Request failed";
      return undefined;
    }); 
  
    return await parseResponse(response, error);
  }
  
  async function parseResponse<T>(response: Response | void, error: HttpError): Promise<T | HttpError> {
    if (!response) return error;
    if (!response.ok) return { code: response.status.toString(), message: response.statusText };
    try {
      return (await response.json()) as T;
    } catch {
      return { code: "400", message: "Bad Request" };
    }
  }
  
  export { post, put, patch, get, remove };
import { HttpError, post, get } from "../http";

import { AuthenticationContextType, MarketRequest, MarketResponse, MarketsResponse } from "../types";

export class JhooseCommerceMarket {
    readonly authenticationContext: AuthenticationContextType;

    constructor(authenticationContext: AuthenticationContextType) 
    {
        this.authenticationContext = authenticationContext;
    }


  /**
   * Fetches the list of markets from the commerce API.
   *
   * @returns {Promise<MarketsResponse | HttpError>} A promise that resolves to a MarketsResponse object
   * containing the list of markets, or an HttpError object if the request fails.
   *
   * @throws {Error} Throws an error if the request fails.
   */
  async getMarkets(): Promise<MarketsResponse | HttpError> {
    
    const marketRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/market/`;

    const marketResponse = await get<MarketsResponse>(
      marketRequestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );
    
    return marketResponse ?? {code: "500", message: "void returned"};
  }

  /**
   * Determines the market based on the provided request.
   *
   * @param {MarketRequest} request - The request object containing market determination parameters.
   * @returns {Promise<MarketResponse | HttpError>} A promise that resolves to a MarketResponse object or an HttpError.
   *
   * @throws {Error} Throws an error if the network request fails.
   */
  async determineMarket(request: MarketRequest): Promise<MarketResponse | HttpError> {

    const marketRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/market/determinemarket`;

    const marketResponse = await post<MarketResponse>(
      marketRequestUrl,
      request,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );
    

    return marketResponse ?? {code: "500", message: "Network Error"};
  }
}

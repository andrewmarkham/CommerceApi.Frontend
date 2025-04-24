import { HttpError, post } from "../http";

import { AuthenticationContextType, MarketContextType } from "../types";

import { PriceInventoryRequest, PriceInventoryResponse } from "../types/product";


export class JhooseCommerceProduct {
    readonly authenticationContext: AuthenticationContextType;
    readonly marketContext: MarketContextType;

    constructor(
        authenticationContext: AuthenticationContextType,
        marketContext: MarketContextType) 
    {
        this.authenticationContext = authenticationContext;
        this.marketContext = marketContext;
    }


  /**
   * Retrieves the price and inventory information for a given product.
   *
   * @param {PriceInventoryRequest} request - The request object containing the product code and other necessary details.
   * @returns {Promise<PriceInventoryResponse | HttpError>} A promise that resolves to the price and inventory response or an HTTP error.
   *
   * @throws {Error} Throws an error if the network request fails.
   */
  async getPriceAndInventory(request: PriceInventoryRequest): Promise<PriceInventoryResponse | HttpError> {
    
    const productInventoryRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/product/${request.productCode}/`;

    const priceInventoryResponse = await post<PriceInventoryResponse>(
      productInventoryRequestUrl,
      request,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return priceInventoryResponse ?? {code: "500", message: "Network Error"};
  }
}

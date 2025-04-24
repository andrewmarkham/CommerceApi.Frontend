import { get, HttpError, post, put, remove } from "../http";

import { AuthenticationContextType, CommerceAddress, CommerceAddressResponse, Customer, CustomerResponse, DeleteCustomerAddressRequest, MarketContextType } from "../types";

export class JhooseCommerceCustomer {
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
   * Retrieves the customer information (of the current, authenticated customer).
   *
   * @returns {Promise<CustomerResponse | HttpError>} A promise that resolves to the customer information or an HTTP error.
   *
   * @throws {Error} Throws an error if the request fails.
   */
  async getCustomer(): Promise<CustomerResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/customer`;

    const response = await get<CustomerResponse>(
      requestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Adds a new customer, the information is based on the currently authenticated customer.
   *
   * @param {Customer} customer - The customer object to be added.
   * @returns {Promise<CustomerResponse | HttpError>} A promise that resolves to the customer response or an HTTP error.
   */
  async addCustomer(customer: Customer): Promise<CustomerResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/customer`;

    const response = await post<CustomerResponse>(
      requestUrl,
      customer,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Updates the customer  (of the current, authenticated customer) information.
   *
   * @param customer - The customer object containing updated information.
   * @returns A promise that resolves to a CustomerResponse object if the update is successful,
   * or an HttpError object if there is an error.
   */
  async updateCustomer(customer: Customer): Promise<CustomerResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/customer`;

    const response = await put<CustomerResponse>(
      requestUrl,
      customer,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Retrieves the addresses associated with the current customer.
   *
   * @returns {Promise<CommerceAddressResponse | HttpError>} A promise that resolves to a `CommerceAddressResponse` object containing the customer's addresses,
   * or an `HttpError` object if an error occurs.
   */
  async getCustomerAddresses(): Promise<CommerceAddressResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/customer/addresses`;

    const response = await get<CommerceAddressResponse>(
      requestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Adds a new customer address (to the current, authenticated customer).
   *
   * @param {CommerceAddress} address - The address to be added.
   * @returns {Promise<CommerceAddressResponse | HttpError>} A promise that resolves to the response of the address addition or an HTTP error.
   */
  async addCustomerAddress(address: CommerceAddress): Promise<CommerceAddressResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/customer/addresses`;

    const response = await post<CommerceAddressResponse>(
      requestUrl,
      address,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Updates the customer's address (of the current, authenticated customer).
   *
   * @param {CommerceAddress} address - The address to be updated.
   * @returns {Promise<CommerceAddressResponse | HttpError>} A promise that resolves to the updated address response or an HTTP error.
   */
  async updateCustomerAddress(address: CommerceAddress): Promise<CommerceAddressResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/customer/addresses`;

    const response = await put<CommerceAddressResponse>(
      requestUrl,
      address,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Removes a customer address (of the current, authenticated customer).
   *
   * @param {DeleteCustomerAddressRequest} request - The request object containing the address ID to be removed.
   * @returns {Promise<CommerceAddressResponse | HttpError>} A promise that resolves to a CommerceAddressResponse if successful, or an HttpError if there is an error.
   */
  async removeCustomerAddress(request: DeleteCustomerAddressRequest): Promise<CommerceAddressResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/customer/addresses/${request.addressId}`;

    const response = await remove<CommerceAddressResponse>(
      requestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }
}

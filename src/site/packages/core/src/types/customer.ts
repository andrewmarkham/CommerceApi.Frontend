import { CommerceAddress } from "./cart";

/**
 * Represents a request to delete a customer address.
 * 
 * @property {string} addressId - The unique identifier of the address to be deleted.
 */
export type DeleteCustomerAddressRequest = {
    addressId: string
};

/**
 * Represents the response containing customer information.
 * 
 * @typedef {Object} CustomerResponse
 * @property {Customer} [customer] - The customer details, if available.
 */
export type CustomerResponse = {
    customer?: Customer;
};

/**
 * Represents a customer in the eCommerce system.
 * 
 * @property {string} id - The unique identifier for the customer.
 * @property {string} [parentOrganisationId] - The optional identifier for the parent organization of the customer.
 * @property {string} email - The email address of the customer.
 * @property {string} fullName - The full name of the customer.
 * @property {string} firstName - The first name of the customer.
 * @property {string} [middleName] - The optional middle name of the customer.
 * @property {string} lastName - The last name of the customer.
 * @property {string} [preferredShippingAddressId] - The optional identifier for the customer's preferred shipping address.
 * @property {string} [preferredBillingAddressId] - The optional identifier for the customer's preferred billing address.
 */
export type Customer = {
    id: string;
    parentOrganisationId?: string;
    email: string;
    fullName: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    preferredShippingAddressId?: string;
    preferredBillingAddressId?: string;
};

/**
 * Represents the response containing customer addresses.
 * 
 * @property {CommerceAddress[]} [customerAddresses] - An optional array of customer addresses.
 */
export type CommerceAddressResponse = {
    customerAddresses?: CommerceAddress[];
};

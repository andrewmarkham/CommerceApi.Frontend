import { Country } from "./cart";

/**
 * Represents the authentication context for a user.
 */
export type AuthenticationContextType = {
    isAnonymous: boolean;
    token: string;
    customerContext: string;
    endpoint: string;
}

/**
 * Represents the context of a market within the eCommerce application.
 * 
 * @typedef {Object} MarketContextType
 * @property {string} currency - The currency code used in the market (e.g., 'USD', 'EUR').
 * @property {string} language - The language code used in the market (e.g., 'en', 'fr').
 * @property {string} market - The identifier for the market.
 * @property {Country[]} countries - An array of countries associated with the market.
 */
export type MarketContextType = {
    currency: string;
    language: string;
    market: string;
    countries: Country[];
}

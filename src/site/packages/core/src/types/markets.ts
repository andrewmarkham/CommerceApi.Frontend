import { Country } from "./cart"
import { MetaData } from "./core"

/**
 * Represents the response containing a list of markets.
 * 
 * @property {Market[]} markets - An array of Market objects.
 */
export type MarketsResponse = {
    markets: Market[]
}

/**
 * Represents the response containing market details.
 * 
 * @property {MarketDetails} marketDetails - The details of the market.
 */
export type MarketResponse = {
    marketDetails: MarketDetails
}

/**
 * Represents a market with various properties such as languages, currencies, and countries.
 * 
 * @typedef {Object} Market
 * @property {string} marketId - The unique identifier for the market.
 * @property {boolean} isEnabled - Indicates whether the market is enabled.
 * @property {string} marketName - The name of the market.
 * @property {string} defaultLanguage - The default language for the market.
 * @property {string[]} languages - The list of languages supported by the market.
 * @property {string} defaultCurrency - The default currency for the market.
 * @property {string[]} currencies - The list of currencies supported by the market.
 * @property {string[]} countries - The list of countries associated with the market.
 * @property {boolean} pricesIncludeTax - Indicates whether prices include tax.
 * @property {string} marketUrl - The URL for the market.
 */
export type Market = {
    marketId: string,
    isEnabled: boolean,
    marketName: string,
    defaultLanguage: string,
    languages: string[],
    defaultCurrency: string,
    currencies: string[],
    countries: string[],
    pricesIncludeTax: boolean,
    marketUrl: string
}

/**
 * Represents the details of a market.
 * 
 * @typedef {Object} MarketDetails
 * @property {string} currency - The currency used in the market.
 * @property {string} market - The identifier for the market.
 * @property {string} language - The language used in the market.
 * @property {string} marketName - The name of the market.
 * @property {Country[]} countries - The list of countries associated with the market.
 */
export type MarketDetails = {
    currency: string,
    market: string,
    language: string,
    marketName: string,
    countries: Country[]
}


/**
 * Represents a request for market data.
 * 
 * @typedef {Object} MarketRequest
 * @property {string} requestUrl - The URL of the market request.
 * @property {MetaData} metaData - Additional metadata associated with the request.
 */
export type MarketRequest = {
    requestUrl: string,
    metaData: MetaData
  }


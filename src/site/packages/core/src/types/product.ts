/**
 * Represents a request for price and inventory information for a specific product.
 * 
 * @property {string} productCode - The unique code identifying the product.
 * @property {string} marketId - The identifier for the market in which the product is being sold.
 * @property {string} currencyCode - The currency code in which the price is requested.
 * @property {string} [warehouse] - An optional identifier for the warehouse from which inventory information is requested.
 */
export type PriceInventoryRequest = {
    productCode: string,
    marketId: string,
    currencyCode: string,
    warehouse? : string,
}

/**
 * Represents the response containing price and inventory information for multiple SKUs.
 */
export type PriceInventoryResponse = {
    skuWithPriceAndInventory: SkuWithPriceAndInventory[]
}

/**
 * Represents a SKU (Stock Keeping Unit) with associated pricing and inventory details.
 * 
 * @property {string} sku - The unique identifier for the product SKU.
 * @property {number} minQuantity - The minimum quantity available for the SKU.
 * @property {number} maxQuantity - The maximum quantity available for the SKU.
 * @property {string} warehouse - The warehouse location where the SKU is stored.
 * @property {Pricing[]} pricing - An array of pricing details for the SKU.
 * @property {Inventory[]} inventory - An array of inventory details for the SKU.
 */
export type SkuWithPriceAndInventory = {
    sku: string,
    minQuantity: number,
    maxQuantity: number,
    warehouse: string,
    pricing: Pricing[],
    inventory: Inventory[]
}

/**
 * Represents the pricing details of a product.
 * 
 * @property {string} currencyCode - The ISO 4217 currency code.
 * @property {string} currencySymbol - The symbol of the currency.
 * @property {number} listPrice - The original price of the product before any discounts.
 * @property {number} salesPrice - The price of the product after applying discounts.
 * @property {Discount} [discount] - Optional discount applied to the product.
 */
export type Pricing = { 
    currencyCode: string,
    currencySymbol: string,
    listPrice: number,
    salesPrice: number,
    discount?: Discount,
}

/**
 * Represents a discount applied to a product.
 * 
 * @property {string} description - A brief description of the discount.
 * @property {number} price - The discounted price of the product.
 * @property {Date} [expiryDate] - The optional expiry date of the discount.
 */
export type Discount = { 
    description: string,
    price: number,
    expiryDate?: Date
}

/**
 * Represents the inventory details for a product.
 * 
 * @property {number} purchaseAvailableQuantity - The quantity available for purchase.
 * @property {string} purchaseAvailableUtc - The UTC date and time when the product is available for purchase.
 * @property {number} backorderAvailableQuantity - The quantity available for backorder.
 * @property {boolean} canBackorder - Indicates if the product can be backordered.
 * @property {string} backorderAvailableUtc - The UTC date and time when the product is available for backorder.
 * @property {number} preorderAvailableQuantity - The quantity available for preorder.
 * @property {boolean} canPreorder - Indicates if the product can be preordered.
 * @property {string} preorderAvailableUtc - The UTC date and time when the product is available for preorder.
 */
export type Inventory = { 
    purchaseAvailableQuantity: number,
    purchaseAvailableUtc: string,
    backorderAvailableQuantity: number,
    canBackorder: boolean,
    backorderAvailableUtc: string,
    preorderAvailableQuantity: number,
    canPreorder: boolean,
    preorderAvailableUtc: string
}
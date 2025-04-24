/**
 * Represents an item that is wrapped with an expiration time.
 * 
 * @property {number} expires - The expiration time of the item in milliseconds since the Unix epoch.
 * @property {string} value - The value of the item.
 */
export type WrappedItem = {
    expires: number;
    value: string;
};
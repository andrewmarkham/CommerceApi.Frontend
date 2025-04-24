import {Buffer} from 'buffer';
import { WrappedItem } from './types';

const STORAGE_LIFETIME = 1000 * 60 * 60; // 1 hour

/**
 * Wraps an item with an expiration time and encodes its value in base64.
 *
 * @template T - The type of the value to be wrapped.
 * @param {T} value - The value to be wrapped.
 * @returns {WrappedItem} An object containing the expiration time and the base64 encoded value.
 */
export function wrapItem<T>(value: T): WrappedItem {
    const json = JSON.stringify(value);

    return {
        expires: Date.now() + STORAGE_LIFETIME,
        value : Buffer.from(json).toString('base64')
    };
}

/**
 * Unwraps a wrapped item and returns its value if it has not expired.
 *
 * @template T - The type of the unwrapped item.
 * @param {WrappedItem} value - The wrapped item containing the value and expiration information.
 * @returns {T | null} - The unwrapped item of type T if it has not expired, otherwise null.
 */
export function unWrapItem<T>(value: WrappedItem): T | null {
    
    if (value.expires < Date.now()) {
        return null;
    }
    const json = Buffer.from(value.value, 'base64').toString() ;

    return JSON.parse(json) as T;
}

/**
 * Retrieves an item from local storage and parses it as JSON.
 *
 * @template T - The expected type of the stored item.
 * @param {string} key - The key of the item to retrieve from local storage.
 * @returns {T | null} - The parsed item from local storage, or null if the item does not exist.
 */
export function getStorageItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    return item ? unWrapItem<T>(JSON.parse(item)) : null;
}

/**
 * Stores an item in the local storage.
 *
 * @template T - The type of the value to be stored.
 * @param {string} key - The key under which the value will be stored.
 * @param {T} value - The value to be stored.
 */
export function setStorageItem<T>(key: string, value: T): void {

    const wrapped = wrapItem(value);
    const json = JSON.stringify(wrapped);
    localStorage.setItem(key, json);    
}

/**
 * Removes an item from the local storage.
 *
 * @param key - The key of the item to remove from local storage.
 */
export function removeStorageItem(key: string): void {
    localStorage.removeItem(key);
}
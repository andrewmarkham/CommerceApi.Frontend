import { describe, it, expect, vi } from 'vitest';
import { wrapItem } from '../../../src/storage';

describe('wrapItem', () => {
    it('should wrap the item with an expiration time and base64 encoded value', () => {
        const value = { key: 'value' };
        const wrappedItem = wrapItem(value);

        expect(wrappedItem).toHaveProperty('expires');
        expect(wrappedItem).toHaveProperty('value');

        const decodedValue = JSON.parse(Buffer.from(wrappedItem.value, 'base64').toString());
        expect(decodedValue).toEqual(value);
    });

    it('should set the expiration time to 1 hour from now', () => {
        const value = { key: 'value' };
        const now = Date.now();
        vi.setSystemTime(now);

        const wrappedItem = wrapItem(value);

        expect(wrappedItem.expires).toBe(now + 1000 * 60 * 60);
    });


});
// sum.test.js
import { expect, test } from 'vitest'
import { decodeJwt, hasTokenExpired } from '@jhoose-commerce/core';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbm9ueW1vdXMiLCJqdGkiOiIxYWUzMDI1ZS02N2JiLTRmOTAtYTA2My1mODVjYjRkZTI5MTEiLCJleHAiOjE3Mjk4NjUyODEsImlzcyI6Ikpob29zZUNvbW1lcmNlQXBpIiwiYXVkIjoiSmhvb3NlQ29tbWVyY2VBcGkifQ.8gEz2rrJ6PXuFrGCHCFrUKihXMe89wpa_9zwuIy5CvY"

test('decode jwt token', () => {

    const token = decodeJwt(jwtToken);
  
    expect(token?.sub).toBe("anonymous")
})

test('has Token expired, expect true', () => {
    const status = hasTokenExpired(jwtToken);
    expect(status).toBe(true);
});
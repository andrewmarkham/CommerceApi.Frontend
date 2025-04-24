import { Cart, CartResponse } from '@jhoose-commerce/core';
import { http, HttpResponse, delay } from 'msw';

const emptyCart: Cart = {
    id: 1,
    name: "Default",
    customerId: "",
    market: "US",
    currency: {
      code: "USD",
      symbol: "$"
    },
    totalPrice: 0,
    subTotalPrice: 0,
    taxTotal: 0,
    shippingTotal: 0,
    shippingDiscountTotal: 0,
    shippingSubTotal: 0,
    orderDiscountTotal: 0,
    forms: [],
    notes: []
  };
  
  const emptyCartResponse: CartResponse = {
    cart: emptyCart,
    hasErrors: false,
    errors: []
  }

  const cart: Cart = {
    id: 1,
    name: "Default",
    customerId: "",
    market: "US",
    currency: {
      code: "USD",
      symbol: "$"
    },
    totalPrice: 10,
    subTotalPrice: 10,
    taxTotal: 0,
    shippingTotal: 0,
    shippingDiscountTotal: 0,
    shippingSubTotal: 0,
    orderDiscountTotal: 0,
    forms: [
        {
            id: 1,
            name: "Default",
            authorizedPaymentTotal: 10,
            capturedPaymentTotal: 10,
            coupons: [],
            shipments:[
                {
                    id: 1,
                    shippingTotal: 0,
                    shippingDiscountPrice: 0,
                    shippingMethodId: "1",
                    shippingMethodName: "Standard",
                    shipmentTrackingNumber: "123456",
                    shippingAddress: {
                        id: "1",
                        firstName: "John",
                        lastName: "Doe",
                        email: "",
                        address:{
                            address1: "123 Test St",
                            address2: "",
                            address3: "",
                            city: "Test",
                            state: "TS",
                            postcode: "12345",
                            country: {
                                code: "US",
                                name: "United States"
                            }
                        },
                        phone: "1234567890",
                        addressTypes: ["Shipping"]
                    },
                    lines: [
                        {
                            id: 1,
                            sku: "123456",
                            displayName: "Test Product",
                            qty: 1,
                            placedPrice: 10,
                            totalPrice: 10,
                            discountedPrice: 0,
                            entryDiscount:0,
                            salesTax: 0,
                            imageUrl: 'https://picsum.photos/200/300'
                        },
                        {
                            id: 2,
                            sku: "123456",
                            displayName: "Test Product 2",
                            qty: 1,
                            placedPrice: 10,
                            totalPrice: 10,
                            discountedPrice: 0,
                            entryDiscount:0,
                            salesTax: 0,
                            imageUrl: 'https://picsum.photos/200/300'
                        },
                        {
                            id: 3,
                            sku: "123456",
                            displayName: "Test Product 3",
                            qty: 1,
                            placedPrice: 10,
                            totalPrice: 10,
                            discountedPrice: 0,
                            entryDiscount:0,
                            salesTax: 0,
                            imageUrl: 'https://picsum.photos/200/300'
                        }
                    ]
                }
            ],
            promotions : [],
            payments: []
        }
    ],
    notes: []
  };

  const cartResponse: CartResponse = {
    cart: cart,
    hasErrors: false,
    errors: []
  }

export const handlers = [
    http.post('http://localhost:6006/commerceapi/cart/', async () => {
       await delay(1000)
       return HttpResponse.json(emptyCart);
     }),
    http.get('http://localhost:6006/commerceapi/cart/', async () => {

       return HttpResponse.json(emptyCartResponse);
     }),
      http.post('http://localhost:6006/commerceapi/cart/1/lines', async () => {
       await delay(1000)
       return HttpResponse.json(emptyCartResponse);
     })
   ]

export const cartHandlers = [
    http.post('http://localhost:6006/commerceapi/cart/', async () => {
       await delay(1000)
       return HttpResponse.json(cart);
     }),
    http.get('http://localhost:6006/commerceapi/cart/', async () => {
       return HttpResponse.json([cart]);
     }),
      http.post('http://localhost:6006/commerceapi/cart/1/lines', async () => {
       await delay(1000)
       return HttpResponse.json(cartResponse);
     })
   ]


export const networkErrorHandlers = [
    http.post('http://localhost:6006/commerceapi/cart/', async () => {
      await delay(2000)
      return HttpResponse.json(emptyCart);
    }),
    http.post('http://localhost:6006/commerceapi/cart/1/lines', async () => {
      await delay(2000)
      return HttpResponse.error()
    }),
  ]

export const httpErrorHandlers = [
    http.post('http://localhost:6006/commerceapi/cart/', async () => {
      await delay(2000)
      return new HttpResponse(null, { status: 500, statusText: "Internal Server Error" });
    }),
    http.post('http://localhost:6006/commerceapi/cart/1/lines', async () => {
      await delay(2000)
      return new HttpResponse(null, { status: 500, statusText: "Internal Server Error" });
    }),
  ]
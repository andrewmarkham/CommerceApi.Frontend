# Jhoose Commerce Core JavaScript API

The `@jhoose/core` package is the foundational TypeScript/JavaScript SDK for the Jhoose Commerce platform. It provides a type-safe, developer-friendly abstraction layer over the Jhoose Commerce REST API, enabling seamless integration of e-commerce functionality into web applications.

## Overview

This core library handles all essential commerce operations and serves as the foundation for other Jhoose packages (such as `@jhoose/components` and `@jhoose/core-nextjs`). It is framework-agnostic and can be used in any JavaScript/TypeScript environment including vanilla JS, React, Next.js, Vue, and more.

## Key Features

- **Authentication Management** - Anonymous and authenticated user sessions, JWT token handling, automatic token validation
- **Cart Operations** - Add/remove items, update quantities, manage cart lifecycle with full type safety
- **Multi-Market Support** - Automatic market detection, multi-currency support, localization handling
- **Checkout Flow** - Complete checkout process including shipping addresses, shipping methods, and order placement
- **Product Services** - Real-time pricing and inventory lookups
- **Customer Management** - Customer profiles, address management, order history
- **Storage Utilities** - Browser storage helpers with automatic serialization
- **Comprehensive TypeScript Support** - Full type definitions for all API requests and responses
- **Context-Based Architecture** - Clean separation of authentication and market contexts

## Getting Started

```javascript

    var authenticationKey = "";  // used to authenticate the request to generate an anonymous user.  This is set on the server.
    var currentPageUrl = "";
    var endpoint = "http://localhost:5000";

    
    // Token is from auth provider
    var token = "";

    // Anonymous user, this is required when not authenticated
    var anonymousResponse = await new JhooseCommerceAuthentication(endpoint).getAnonymousUser(authenticationKey);
    var token = anonymousResponse.accessToken;
    
    // once authenticated generate the customer context
    var authentication = new JhooseCommerceAuthentication(token,endpoint);
    var customerContext = await authentication.getCustomerContext();

    const authenticationContext: AuthenticationContextType = {
        endpoint: endpoint,
        token: token,
        customerContext: customerContext.customerContext,
        isAnonymous: customerContext.isAnonymous
    };


    // Get the market from the current page
    const marketClient = new JhooseCommerceMarket(authenticationContext);
    var marketResponse = await marketClient.determineMarket({requestUrl: currentPageUrl, metaData: {}});

    const marketContext: MarketContextType = {
        market: marketResponse.marketDetails.market,
        currency: marketResponse.marketDetails.currency,
        language: marketResponse.marketDetails.language,
        countries: marketResponse.marketDetails.countries
    };

    // Create the client
    var client = new JhooseCommerceClient(authenticationContext,marketContext);

    // Request to add to cart, setting the cartId to null will get the default cart
    var request: AddToCartRequest = {
        cartId: null,
        items: [
            {
                sku: "SKU-39813617",
                qty: 1
            }
        ]
    };

    // add the product to the cart
    var cartResponse = await client.cart.addToCart(request);
```

## API Documentation
[Full API Documentation](./docs/README.md)
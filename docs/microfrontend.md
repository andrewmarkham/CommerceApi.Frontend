## Micro UI Layer

``` json
  "dependencies": {
    "@jhoose-commerce/components": "^1.0.0",
    "react": "^18",
    "react-dom": "^18"
  },
```

Add css to global.css
`@import '@jhoose-commerce/components/dist/style.css';
`
### Providers
``` html
    <AuthenticationProvider
      token={token}
      customerContext={customerContext.customerContext}
      endpoint={COMMERCE_ENDPOINT}>
      <MarketProvider currency="USD" market="US" language="en-GB">
        <Navigation />
        {props.children}
      </MarketProvider>
    </AuthenticationProvider>
```

### Hooks
``` js
  const { client, marketContext } = useJhooseCommerce();
```

### Components

``` html
    <Overlay show={props.show} onClick={props.close} />
    
    <Drawer heading="Your Cart" show={showMiniCart} close={() => setShowMiniCart(false)}>
      <MiniCart show={showMiniCart} />
    </Drawer>

    <MiniCart show={showMiniCart} />

    <AddToCart sku="123" qty={1} />
```
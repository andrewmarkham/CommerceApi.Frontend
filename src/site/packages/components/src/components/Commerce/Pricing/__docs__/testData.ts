export const testSkusWithDiscount = JSON.parse("[{\"sku\":\"SKU-21320040\",\"minQuantity\":1.000000000,\"maxQuantity\":100.000000000,\"warehouse\":\"default\",\"pricing\":[{\"currencyCode\":\"USD\",\"currencySymbol\":\"$\",\"listPrice\":24.500000000,\"salesPrice\":23.500000000,\"discount\":{\"product\":{\"id\":57,\"workID\":0,\"providerName\":\"CatalogContent\",\"getPublishedOrLatest\":false,\"isExternalProvider\":true,\"isReadOnly\":false},\"price\":19.600000000,\"description\":\"test1\",\"expiryDate\":\"2025-10-31T00:00:00+00:00\"}}],\"inventory\":[{\"purchaseAvailableQuantity\":43,\"purchaseAvailableUtc\":\"2015-04-22T11:48:28Z\",\"backorderAvailableQuantity\":0,\"canBackorder\":false,\"backorderAvailableUtc\":\"9999-12-31T23:59:59.9999999Z\",\"preorderAvailableQuantity\":0,\"canPreorder\":false,\"preorderAvailableUtc\":\"2015-04-22T11:48:28Z\"}]},{\"sku\":\"SKU-21320033\",\"minQuantity\":1.000000000,\"maxQuantity\":100.000000000,\"warehouse\":\"default\",\"pricing\":[{\"currencyCode\":\"USD\",\"currencySymbol\":\"$\",\"listPrice\":24.500000000,\"salesPrice\":24.500000000,\"discount\":{\"product\":{\"id\":58,\"workID\":0,\"providerName\":\"CatalogContent\",\"getPublishedOrLatest\":false,\"isExternalProvider\":true,\"isReadOnly\":false},\"price\":19.600000000,\"description\":\"test1\",\"expiryDate\":\"2025-10-31T00:00:00+00:00\"}}],\"inventory\":[{\"purchaseAvailableQuantity\":25,\"purchaseAvailableUtc\":\"2015-04-22T11:48:29Z\",\"backorderAvailableQuantity\":0,\"canBackorder\":false,\"backorderAvailableUtc\":\"9999-12-31T23:59:59.9999999Z\",\"preorderAvailableQuantity\":0,\"canPreorder\":false,\"preorderAvailableUtc\":\"2015-04-22T11:48:29Z\"}]}]");

export const skus = [
    {
      "sku": "SKU-21320040",
      "minQuantity": 1.0,
      "maxQuantity": 100.0,
      "warehouse": "default",
      "pricing": [
        {
          "currencyCode": "USD",
          "currencySymbol": "$",
          "listPrice": 24.5,
          "salesPrice": 24.5,
        }
      ],
      "inventory": [
        {
          "purchaseAvailableQuantity": 43,
          "purchaseAvailableUtc": "2015-04-22T11:48:28Z",
          "backorderAvailableQuantity": 0,
          "canBackorder": false,
          "backorderAvailableUtc": "9999-12-31T23:59:59.9999999Z",
          "preorderAvailableQuantity": 0,
          "canPreorder": false,
          "preorderAvailableUtc": "2015-04-22T11:48:28Z"
        }
      ]
    },
    {
      "sku": "SKU-21320033",
      "minQuantity": 1.0,
      "maxQuantity": 100.0,
      "warehouse": "default",
      "pricing": [
        {
          "currencyCode": "USD",
          "currencySymbol": "$",
          "listPrice": 24.5,
          "salesPrice": 24.5,
        }
      ],
      "inventory": [
        {
          "purchaseAvailableQuantity": 25,
          "purchaseAvailableUtc": "2015-04-22T11:48:29Z",
          "backorderAvailableQuantity": 0,
          "canBackorder": false,
          "backorderAvailableUtc": "9999-12-31T23:59:59.9999999Z",
          "preorderAvailableQuantity": 0,
          "canPreorder": false,
          "preorderAvailableUtc": "2015-04-22T11:48:29Z"
        }
      ]
    }
  ];

  export const skusRange = [
    {
      "sku": "SKU-21320040",
      "minQuantity": 1.0,
      "maxQuantity": 100.0,
      "warehouse": "default",
      "pricing": [
        {
          "currencyCode": "USD",
          "currencySymbol": "$",
          "listPrice": 24.5,
          "salesPrice": 23.5,
        }
      ],
      "inventory": [
        {
          "purchaseAvailableQuantity": 43,
          "purchaseAvailableUtc": "2015-04-22T11:48:28Z",
          "backorderAvailableQuantity": 0,
          "canBackorder": false,
          "backorderAvailableUtc": "9999-12-31T23:59:59.9999999Z",
          "preorderAvailableQuantity": 0,
          "canPreorder": false,
          "preorderAvailableUtc": "2015-04-22T11:48:28Z"
        }
      ]
    },
    {
      "sku": "SKU-21320033",
      "minQuantity": 1.0,
      "maxQuantity": 100.0,
      "warehouse": "default",
      "pricing": [
        {
          "currencyCode": "USD",
          "currencySymbol": "$",
          "listPrice": 24.5,
          "salesPrice": 24.5,
        }
      ],
      "inventory": [
        {
          "purchaseAvailableQuantity": 25,
          "purchaseAvailableUtc": "2015-04-22T11:48:29Z",
          "backorderAvailableQuantity": 0,
          "canBackorder": false,
          "backorderAvailableUtc": "9999-12-31T23:59:59.9999999Z",
          "preorderAvailableQuantity": 0,
          "canPreorder": false,
          "preorderAvailableUtc": "2015-04-22T11:48:29Z"
        }
      ]
    }
  ];
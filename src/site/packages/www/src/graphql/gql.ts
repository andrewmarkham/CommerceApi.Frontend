/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    query ProductCatalogQuery($languages: [Locales] = en) {\n      CatalogContent(locale: $languages) {\n        total\n        items {\n          Name\n          _children {\n            GenericNode {\n              items {\n                ...GenericNodeFragment\n              }\n            }\n          }\n        }\n      }\n    }": types.ProductCatalogQueryDocument,
    " \n  fragment GenericNodeFragment on GenericNode {\n      Code\n      DisplayName\n      Description\n      DefaultImageUrl\n      RouteSegment\n      Url\n      SeoUri\n      RelativePath\n  }": types.GenericNodeFragmentFragmentDoc,
    " \n  fragment GenericProductFragment on GenericProduct {\n      Name\n      Code\n      DisplayName\n      RelativePath\n      RouteSegment\n      LongDescription\n      ProductTeaser\n      Sizing\n      TotalItemsOfAllVariantsInAllWarehouses\n      LowestPriceOfVariationPerMarket {\n        MarketName\n        Price\n      }\n      DefaultImageUrl\n      Brand\n      ParentCategories\n      ContentLink {\n        Id\n        GuidValue\n      }\n  }": types.GenericProductFragmentFragmentDoc,
    "\n    query ProductCategoryQuery($languages: [Locales] = en, $segment: String) {\n            GenericNode(locale: $languages, where: { RouteSegment: { eq: $segment } }) {\n              total\n              items {\n                ...GenericNodeFragment\n                _children {\n                  GenericNode {\n                    total\n                    items {\n                      ...GenericNodeFragment\n                    }\n                  }\n                }\n              }\n            }\n          }": types.ProductCategoryQueryDocument,
    "\n    query ProductQuery($languages: [Locales] = en, $category: [String], $market: String = \"USA\") {\n    GenericProduct(\n        locale: $languages\n        where: {\n        ParentCategories: { in: $category }\n        LowestPriceOfVariationPerMarket: { MarketName: { eq: $market } }\n        }\n    ) {\n        items {\n        ...GenericProductFragment\n        }\n    }\n    }": types.ProductQueryDocument,
    "\n    query GetProductQuery($languages: [Locales] = en, $segment: String) {\n    GenericProduct(locale: $languages, where: { RouteSegment: { eq: $segment} }) {\n      items {\n        ...GenericProductFragment\n      }\n    }\n  }": types.GetProductQueryDocument,
    "\n    query ProductDetail(\n    $locale: Locales = en\n    $code: String!\n    ) {\n    GenericProduct(\n        locale: [$locale]\n        where:{\n        Code: { eq: $code }\n        }\n        limit:1\n    ) {\n        items {\n        Name\n        Code\n        DefaultImageUrl\n        Brand\n        LongDescription\n        ProductTeaser\n        Sizing\n        ContentLink {\n            Id\n            GuidValue\n        }\n        }\n    }\n    }\n": types.ProductDetailDocument,
    "\nquery VariantQuery($productId: String!) {\n    GenericVariant(\n      where: { ProductParents: {GuidValue: { in: [$productId] }}, Language: { Name: { eq: \"en\" } } }\n    ) {\n      items {\n        Color\n        Size\n        Code\n        DisplayName\n        ProductParents {\n          GuidValue\n        }\n        Language {\n          Name\n        }\n      }\n    }\n  }\n": types.VariantQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProductCatalogQuery($languages: [Locales] = en) {\n      CatalogContent(locale: $languages) {\n        total\n        items {\n          Name\n          _children {\n            GenericNode {\n              items {\n                ...GenericNodeFragment\n              }\n            }\n          }\n        }\n      }\n    }"): (typeof documents)["\n    query ProductCatalogQuery($languages: [Locales] = en) {\n      CatalogContent(locale: $languages) {\n        total\n        items {\n          Name\n          _children {\n            GenericNode {\n              items {\n                ...GenericNodeFragment\n              }\n            }\n          }\n        }\n      }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " \n  fragment GenericNodeFragment on GenericNode {\n      Code\n      DisplayName\n      Description\n      DefaultImageUrl\n      RouteSegment\n      Url\n      SeoUri\n      RelativePath\n  }"): (typeof documents)[" \n  fragment GenericNodeFragment on GenericNode {\n      Code\n      DisplayName\n      Description\n      DefaultImageUrl\n      RouteSegment\n      Url\n      SeoUri\n      RelativePath\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " \n  fragment GenericProductFragment on GenericProduct {\n      Name\n      Code\n      DisplayName\n      RelativePath\n      RouteSegment\n      LongDescription\n      ProductTeaser\n      Sizing\n      TotalItemsOfAllVariantsInAllWarehouses\n      LowestPriceOfVariationPerMarket {\n        MarketName\n        Price\n      }\n      DefaultImageUrl\n      Brand\n      ParentCategories\n      ContentLink {\n        Id\n        GuidValue\n      }\n  }"): (typeof documents)[" \n  fragment GenericProductFragment on GenericProduct {\n      Name\n      Code\n      DisplayName\n      RelativePath\n      RouteSegment\n      LongDescription\n      ProductTeaser\n      Sizing\n      TotalItemsOfAllVariantsInAllWarehouses\n      LowestPriceOfVariationPerMarket {\n        MarketName\n        Price\n      }\n      DefaultImageUrl\n      Brand\n      ParentCategories\n      ContentLink {\n        Id\n        GuidValue\n      }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProductCategoryQuery($languages: [Locales] = en, $segment: String) {\n            GenericNode(locale: $languages, where: { RouteSegment: { eq: $segment } }) {\n              total\n              items {\n                ...GenericNodeFragment\n                _children {\n                  GenericNode {\n                    total\n                    items {\n                      ...GenericNodeFragment\n                    }\n                  }\n                }\n              }\n            }\n          }"): (typeof documents)["\n    query ProductCategoryQuery($languages: [Locales] = en, $segment: String) {\n            GenericNode(locale: $languages, where: { RouteSegment: { eq: $segment } }) {\n              total\n              items {\n                ...GenericNodeFragment\n                _children {\n                  GenericNode {\n                    total\n                    items {\n                      ...GenericNodeFragment\n                    }\n                  }\n                }\n              }\n            }\n          }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProductQuery($languages: [Locales] = en, $category: [String], $market: String = \"USA\") {\n    GenericProduct(\n        locale: $languages\n        where: {\n        ParentCategories: { in: $category }\n        LowestPriceOfVariationPerMarket: { MarketName: { eq: $market } }\n        }\n    ) {\n        items {\n        ...GenericProductFragment\n        }\n    }\n    }"): (typeof documents)["\n    query ProductQuery($languages: [Locales] = en, $category: [String], $market: String = \"USA\") {\n    GenericProduct(\n        locale: $languages\n        where: {\n        ParentCategories: { in: $category }\n        LowestPriceOfVariationPerMarket: { MarketName: { eq: $market } }\n        }\n    ) {\n        items {\n        ...GenericProductFragment\n        }\n    }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetProductQuery($languages: [Locales] = en, $segment: String) {\n    GenericProduct(locale: $languages, where: { RouteSegment: { eq: $segment} }) {\n      items {\n        ...GenericProductFragment\n      }\n    }\n  }"): (typeof documents)["\n    query GetProductQuery($languages: [Locales] = en, $segment: String) {\n    GenericProduct(locale: $languages, where: { RouteSegment: { eq: $segment} }) {\n      items {\n        ...GenericProductFragment\n      }\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ProductDetail(\n    $locale: Locales = en\n    $code: String!\n    ) {\n    GenericProduct(\n        locale: [$locale]\n        where:{\n        Code: { eq: $code }\n        }\n        limit:1\n    ) {\n        items {\n        Name\n        Code\n        DefaultImageUrl\n        Brand\n        LongDescription\n        ProductTeaser\n        Sizing\n        ContentLink {\n            Id\n            GuidValue\n        }\n        }\n    }\n    }\n"): (typeof documents)["\n    query ProductDetail(\n    $locale: Locales = en\n    $code: String!\n    ) {\n    GenericProduct(\n        locale: [$locale]\n        where:{\n        Code: { eq: $code }\n        }\n        limit:1\n    ) {\n        items {\n        Name\n        Code\n        DefaultImageUrl\n        Brand\n        LongDescription\n        ProductTeaser\n        Sizing\n        ContentLink {\n            Id\n            GuidValue\n        }\n        }\n    }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery VariantQuery($productId: String!) {\n    GenericVariant(\n      where: { ProductParents: {GuidValue: { in: [$productId] }}, Language: { Name: { eq: \"en\" } } }\n    ) {\n      items {\n        Color\n        Size\n        Code\n        DisplayName\n        ProductParents {\n          GuidValue\n        }\n        Language {\n          Name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery VariantQuery($productId: String!) {\n    GenericVariant(\n      where: { ProductParents: {GuidValue: { in: [$productId] }}, Language: { Name: { eq: \"en\" } } }\n    ) {\n      items {\n        Color\n        Size\n        Code\n        DisplayName\n        ProductParents {\n          GuidValue\n        }\n        Language {\n          Name\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
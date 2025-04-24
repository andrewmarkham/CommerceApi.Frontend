import { graphql } from "@/graphql";

export const ProductQuery = graphql(/* GraphQL */ `
    query ProductQuery($languages: [Locales] = en, $category: [String], $market: String = "USA") {
    GenericProduct(
        locale: $languages
        where: {
        ParentCategories: { in: $category }
        LowestPriceOfVariationPerMarket: { MarketName: { eq: $market } }
        }
    ) {
        items {
        ...GenericProductFragment
        }
    }
    }`);

export const GetProductQuery = graphql(/* GraphQL */ `
    query GetProductQuery($languages: [Locales] = en, $segment: String) {
    GenericProduct(locale: $languages, where: { RouteSegment: { eq: $segment} }) {
      items {
        ...GenericProductFragment
      }
    }
  }`);


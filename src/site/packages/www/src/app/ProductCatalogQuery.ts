import { graphql } from "@/graphql";

export const ProductCatalogQuery = graphql(/* GraphQL */ `
    query ProductCatalogQuery($languages: [Locales] = en) {
      CatalogContent(locale: $languages) {
        total
        items {
          Name
          _children {
            GenericNode {
              items {
                ...GenericNodeFragment
              }
            }
          }
        }
      }
    }`);
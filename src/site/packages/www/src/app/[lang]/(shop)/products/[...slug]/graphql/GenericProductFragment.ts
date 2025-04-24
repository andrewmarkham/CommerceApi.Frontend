
import { graphql } from "@/graphql";

  export const GenericProductFragment = graphql(/* GraphQL */ ` 
  fragment GenericProductFragment on GenericProduct {
      Name
      Code
      DisplayName
      RelativePath
      RouteSegment
      LongDescription
      ProductTeaser
      Sizing
      TotalItemsOfAllVariantsInAllWarehouses
      LowestPriceOfVariationPerMarket {
        MarketName
        Price
      }
      DefaultImageUrl
      Brand
      ParentCategories
      ContentLink {
        Id
        GuidValue
      }
  }`);

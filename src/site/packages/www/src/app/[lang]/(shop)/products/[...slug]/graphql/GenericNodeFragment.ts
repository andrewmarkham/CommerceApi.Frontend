
import { graphql } from "@/graphql";

  export const GenericNodeFragment = graphql(/* GraphQL */ ` 
  fragment GenericNodeFragment on GenericNode {
      Code
      DisplayName
      Description
      DefaultImageUrl
      RouteSegment
      Url
      SeoUri
      RelativePath
  }`);
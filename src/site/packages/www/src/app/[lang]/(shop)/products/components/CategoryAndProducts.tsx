import { GenericNode, GenericProduct } from "@/graphql/graphql";
import { CategoryFilters } from "./CategoryFilters";
import { ProductCard } from "./ProductCard";
import { MarketDetails } from "@jhoose-commerce/core";

export type CategoryAndProductsProps = {
  currentNode: GenericNode, genericNodes: GenericNode[], genericProducts: GenericProduct[], market: MarketDetails, lang: string
}

export const CategoryAndProducts = (props: CategoryAndProductsProps) => {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-4">{props.currentNode?.DisplayName}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.currentNode?.Description ?? "" }}></div>
      </div>
      <div className="w-full">
        <CategoryFilters categories={props.genericNodes as GenericNode[]} />
      </div>
      <div>
        <p className="text-right mb-2">Total: {props.genericProducts.length}</p>
      </div>
      <div className="grid grid-cols-4 gap-4">

        {props.genericProducts &&
          props.genericProducts?.map((item, index) => {
            return (
              <ProductCard key={index} card={item || {}} market={props.market} locale={props.lang} />
            );
          })}
      </div>
    </>
  );
};

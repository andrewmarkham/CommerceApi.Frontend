import { GenericProduct } from "@/graphql/graphql";
import { Price } from "@jhoose-commerce/components";
import { MarketDetails } from "@jhoose-commerce/core";

type ProductCardProps = {
  card: GenericProduct;
  market: MarketDetails;
  locale: string;
};

export const ProductCard = (props: ProductCardProps) => {

    const imageUrl = `${process.env.COMMERCE_ENDPOINT}/${props.card.DefaultImageUrl}`;
    const price = props.card.LowestPriceOfVariationPerMarket?.find(p => p?.MarketName === props.market.marketName);

    return (
      <a href={props.card.RelativePath ?? "#"}>
        <div className="flex flex-col">
          <div className="flex-none bg-cover overflow-hidden min-h-[478px]"  title={props.card.DisplayName ?? ""}>
            <img className="" src={imageUrl} />
          </div>
          <div className=" py-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-l mb-2">{props.card.DisplayName}</div>
              <div className="text-gray-700 text-base max-w-prose line-clamp-5" dangerouslySetInnerHTML={{ __html: props.card.Description ?? "" }} />
              <Price price={price?.Price ?? 0} currency={props.market.currency} locale={props.locale} />
            </div>
          </div>
        </div>
      </a>
    )
   } 
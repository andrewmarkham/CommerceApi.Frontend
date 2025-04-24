import { MarketSelector } from "@jhoose-commerce/components"
import { MarketDetails } from "@jhoose-commerce/core";
import { getAllMarkets } from "@jhoose-commerce/core-nextjs";

export const Footer = async (props: { labels: any, currentMarket: MarketDetails }) => {

    var { currentMarket } = props;

    const markets = await getAllMarkets();
    
    return (
        <footer className="flex-none mx-4 border-t-2 border-zinc-100 py-2">
            <MarketSelector heading={props.labels.market.heading} markets={markets} currentMarketName={currentMarket.marketName} />
        </footer>
    )
}
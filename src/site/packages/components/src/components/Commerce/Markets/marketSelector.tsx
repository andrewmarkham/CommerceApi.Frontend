import { Drawer } from "@components/Core/Drawer";
import { Market } from "@jhoose-commerce/core";
import { useState } from "react";
import MarketSwitcher from "./marketSwitcher";

type MarketSelectorProps = {
    heading: string,
    currentMarketName: string,
    markets: Array<Market>
}

const MarketSelector = (props: MarketSelectorProps) => {
    const [showMarketSelector, setShowMarketSelector] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShowMarketSelector(true)}>{props.currentMarketName}</button>
            </div>
            
            <Drawer heading={props.heading} show={showMarketSelector} close={() => setShowMarketSelector(false)}>
                <div className="marketSelector">
                    {props.markets?.map((market) => {
                        return (
                            <div key={market.marketId} className="items">
                                <MarketSwitcher marketName={market.marketName}  url={market.marketUrl} />
                            </div>
                        )
                    })}
                </div> 
            </Drawer>
        </>
    )
}

export default MarketSelector;
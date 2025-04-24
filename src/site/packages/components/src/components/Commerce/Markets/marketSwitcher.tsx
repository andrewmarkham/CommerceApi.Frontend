'use client'

const MarketSwitcher = (props: {marketName: string, url:string}) => {
    
    return <button onClick={() => window.location.href = props.url}>{props.marketName}</button>
}

export default MarketSwitcher;
'use client';
import { Country, MarketContextType } from '@jhoose-commerce/core';
import {createContext,PropsWithChildren } from 'react';


const MarketContext = createContext<MarketContextType>({ market: "", language: "", currency: "", countries: [] });

type MarketProviderProps = {
    market: string,
    language: string,
    currency: string,
    countries: Country[]
}

const MarketProvider = (props : PropsWithChildren<MarketProviderProps>) => {

    return (
        <MarketContext.Provider value={{ market: props.market, language: props.language, currency: props.currency, countries: props.countries }}>
            {props.children}
        </MarketContext.Provider>
    );
}

export { MarketProvider, MarketContext};
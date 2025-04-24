import { MARKET_COOKIE } from "@jhoose-commerce/core";
import Cookies from 'js-cookie';

export function getMarketDetailsFromCookie()  {
    //const [cookies] = useCookies([MARKET_COOKIE]);

    return JSON.parse(Cookies.get(MARKET_COOKIE) ?? '{ marketId: "", marketName: "" }');

    //return cookies.market || { marketId: "", marketName: "" };
  }

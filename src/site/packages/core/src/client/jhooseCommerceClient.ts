import { AuthenticationContextType, MarketContextType } from "../types";
import { JhooseCommerceCart } from "./jhooseCommerceCart";
import { JhooseCommerceCheckout } from "./jhooseCommerceCheckout";
import { JhooseCommerceCustomer } from "./jhooseCommerceCustomer";
import { JhooseCommerceMarket } from "./jhooseCommerceMarket";
import { JhooseCommerceProduct } from "./jhooseCommerceProduct";

export class JhooseCommerceClient {
    readonly authenticationContext: AuthenticationContextType;
    readonly marketContext: MarketContextType;
    readonly isServerSide: boolean;

    constructor(
        authenticationContext: AuthenticationContextType,
        marketContext: MarketContextType,
        isServerSide: boolean = false) 
    {
        this.authenticationContext = authenticationContext;
        this.marketContext = marketContext;
        this.isServerSide = isServerSide;
    }
  
    private _cart: JhooseCommerceCart | undefined;
  
    get cart(): JhooseCommerceCart {
      return this._cart || (this._cart = new JhooseCommerceCart(this.authenticationContext, this.marketContext, this.isServerSide));
    }

    private _customer: JhooseCommerceCustomer | undefined;
  
    get customer(): JhooseCommerceCustomer {
      return this._customer || (this._customer = new JhooseCommerceCustomer(this.authenticationContext, this.marketContext));
    }

    
    private _product: JhooseCommerceProduct | undefined;
    
    get product(): JhooseCommerceProduct {
      return this._product || (this._product = new JhooseCommerceProduct(this.authenticationContext, this.marketContext));
    }

    private _market: JhooseCommerceMarket | undefined;
    
    get market(): JhooseCommerceMarket {
      return this._market || (this._market = new JhooseCommerceMarket(this.authenticationContext));
    }

    private _checkout: JhooseCommerceCheckout | undefined;
    
    get checkout(): JhooseCommerceCheckout {
      return this._checkout || (this._checkout = new JhooseCommerceCheckout(this.authenticationContext, this.marketContext));
    }
  }
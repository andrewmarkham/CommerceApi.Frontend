import type { Metadata, NextPage } from "next";
import { Inter } from "next/font/google";
import ".././globals.css";
import { getCurrentMarketFromCookie } from "@jhoose-commerce/core-nextjs";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { getDictionary, Locale } from "@/lib/dictionaries";
import { JhooseCommerceProvider, MarketProvider, Toaster } from "@jhoose-commerce/components";
import { MarketDetails } from "@jhoose-commerce/core";
import { headers } from "next/headers";
import { Footer } from "../components/layout/footer/footer";
import { Auth0Provider } from "@auth0/nextjs-auth0";
import { auth0 } from "@/lib/auth0";


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {

  const { lang } = await params;
  const marketDetails = await getMarketDetails(lang);
  const dict = await getDictionary(lang);

  const session = await auth0.getSession();

  return (
    <html lang={lang}>
      {
        <body className={inter.className}>
          <ApolloWrapper>
            <Auth0Provider  user={session?.user}>

                <JhooseCommerceProvider>
                  <MarketProvider currency={marketDetails.currency} market={marketDetails.market} language={marketDetails.language} countries={marketDetails.countries}>
                      <div className="flex flex-col h-screen">
                        {children}
                        <Footer labels={dict} currentMarket={marketDetails}/>
                      </div>
                  </MarketProvider>
                </JhooseCommerceProvider>

            </Auth0Provider>
          </ApolloWrapper>
          <Toaster />
        </body>
      }
    </html >
  );
}

async function getMarketDetails(lang: string) : Promise<MarketDetails>  {
    var marketDetails =  await getCurrentMarketFromCookie();

    // If the language in the cookie is different from the language in the props, we need to update the marketDetails from the header
    if (marketDetails?.language !== lang) { 
      const cookieHeader = (await headers()).get("Set-Cookie")?.trim();

      var marketDetailsFromHeader = cookieHeader?.split(";").map((cookiePart: string) => {
        var parts = cookiePart.trim().split("=");
        if (parts[0].trim() === "market") {
          return JSON.parse(decodeURIComponent(parts[1].trim()));
        }
      });
      
      if (marketDetailsFromHeader && marketDetailsFromHeader.length > 0) {
        marketDetails = marketDetailsFromHeader[0] ?? {};
      }
    }

    return marketDetails ?? { currency: "USD", market: "US", marketName: "TBC", language: "en", countries: [] };
}
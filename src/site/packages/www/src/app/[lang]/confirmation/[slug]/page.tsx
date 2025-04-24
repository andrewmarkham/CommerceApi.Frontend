import { StripeOrderSummary } from "@/app/components/Stripe/StripeOrderSummary";
import { Locale } from "@/lib/dictionaries";

import { Suspense } from "react";

export default async function Confirmation({ params, searchParams }: 
    { 
        params: Promise<{ slug: string, lang:Locale  }>,
        searchParams: Promise<{payment_intent: string, payment_intent_client_secret: string, redirect_status: string}> }) {
    
    const { lang, slug } = await params;
    const { payment_intent, payment_intent_client_secret, redirect_status } = await searchParams;
    const cartId = parseInt(slug);


    return (
        <main className="flex flex-col items-center justify-between p-24 w-full">
            <Suspense fallback={<div>Loading Order...</div>}>
                {redirect_status === "succeeded" ?
                <StripeOrderSummary cartId={cartId} 
                    paymentIntent={payment_intent} 
                    clientSecret={payment_intent_client_secret}
                    redirect_status={redirect_status}/>
                : <div>Payment Failed</div>}
            </Suspense>
        </main>
    );
  }
  
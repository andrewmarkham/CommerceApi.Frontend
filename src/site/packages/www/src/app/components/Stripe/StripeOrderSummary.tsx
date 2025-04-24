'use server';
import { Stripe } from "stripe";

export type StripeOrderSummaryProps = {
    cartId: number, 
    paymentIntent: string, 
    clientSecret: string
    redirect_status: string
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

export const StripeOrderSummary = async (props: StripeOrderSummaryProps) => {

    const fetchPaymentIntent = async () => {

        for (let i = 0; i < 3; i++) {
            const pi = await stripe.paymentIntents.retrieve(props.paymentIntent);
            
            var po = pi.metadata["orderId"];
            if (po) {
                return pi;
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    };

    const paymentIntent = await fetchPaymentIntent() ?? {} as Stripe.PaymentIntent;

    return (
        <main className="flex flex-col pt-24 px-24 w-full mb-4 justify-center align-middle">
          <h1 className="text-4xl mb-4">Thankyou for your order</h1>
          <pre>
            {JSON.stringify(paymentIntent.metadata, null, 2)}
        </pre>
        <p>{paymentIntent.metadata["orderId"]}</p>
        </main>);
};
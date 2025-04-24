import { getDictionary, Locale } from "@/lib/dictionaries";
import { StripeCheckout } from "@jhoose-commerce/stripe-payment";
import { headers } from 'next/headers';

const CheckoutPage = async ({ params }: { params: Promise<{ slug: string, lang:Locale  }> }) => {

  const { lang } = await params;
  const dict = await getDictionary(lang) ?? {};

  const host = (await headers()).get('host');
  const protocol = 'https';
  const returnUrl = `${protocol}://${host}/${lang}/confirmation/`;

  return (
    <main className="flex flex-col pt-24 px-24 w-full mb-4 justify-center align-middle">
      <h1 className="text-4xl mb-4">Checkout</h1>
      <StripeCheckout cartLabels={dict.cartSummary} checkoutLabels={dict.checkout} returnUrl={returnUrl}  />
    </main>
  );
}

export default CheckoutPage


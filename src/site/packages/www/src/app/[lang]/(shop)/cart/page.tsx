
import { getDictionary, Locale } from "@/lib/dictionaries";
import { MiniCart } from "@jhoose-commerce/components";

export default async function CartPage({ params }: { params: Promise<{ slug: string, lang:Locale  }> }) {

  const { lang } = await params;
  const dict = await getDictionary(lang);
  const checkoutUrl = `/${lang}/checkout`;

  return (
      <main className="flex flex-col pt-24 pl-24 w-9/12 mb-4">
        <h1 className="text-4xl mb-4">{dict.minicart.heading}</h1>
        <MiniCart mode="onpage" show={true} checkoutUrl={checkoutUrl}  labels={dict.minicart} />
      </main>
  );
}

import CheckoutNavigation from "./components/navigation";
import { getDictionary, Locale } from "@/lib/dictionaries";

export default async function CheckoutLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {

    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <>
            <CheckoutNavigation lang={lang} labels={dict} />
            <div className="flex-1">
                {children}
            </div>
        </>
    );
}


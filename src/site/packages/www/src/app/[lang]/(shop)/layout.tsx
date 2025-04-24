import Navigation from "@/app/components/layout/navigation/navigation";
import { getDictionary, Locale } from "@/lib/dictionaries";

export default async function ShopLayout({
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
            <Navigation lang={lang} labels={dict} />
            <div className="flex-1">
                {children}
            </div>
        </>
    )
  }
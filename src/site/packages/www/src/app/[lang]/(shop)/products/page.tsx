
import { Locales } from "@/graphql/graphql";
import { Locale } from "@/lib/dictionaries";
import { getClient } from '@/lib/client';
import { ProductCategoryCard } from "./components/ProductCategoryCard";
import { ProductCatalogQuery } from "@/app/ProductCatalogQuery";

export default async function Products({ params }: { params: Promise<{ slug: string, lang:Locale  }> }) {

  const { lang } = await params;
  return (
      <main className="flex flex-col items-center justify-between p-24 w-full">
        <ProductCatalogRoot lang={lang} />
      </main>
  );
}

type ProductCatalogRootProps = {
  lang: Locale
}

const ProductCatalogRoot = async (props: ProductCatalogRootProps) => {

  const { data } = await getClient().query({ query: ProductCatalogQuery, variables: { languages: props.lang as Locales } });
  const genericNodes = data?.CatalogContent?.items?.at(0)?._children?.GenericNode?.items ?? [];

  return (
   
    <div className="w-full flex flex-wrap flex-row gap-4 justify-center">
        {genericNodes &&
          genericNodes?.map((item, index) => {
            return (
              <ProductCategoryCard key={index} {...item} />
            )
        })}
    </div>
  )
}
 



 
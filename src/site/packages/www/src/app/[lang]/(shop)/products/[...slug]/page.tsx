import { getDictionary, Locale } from "@/lib/dictionaries";
import { GenericNode, GenericProduct, Locales } from "@/graphql/graphql";
import { getClient } from '@/lib/client';
import { ProductCategoryQuery } from "./graphql/ProductCategoryQuery";
import { GetProductQuery, ProductQuery } from "./graphql/ProductQuery";
import { getCurrentMarketFromCookie } from "@jhoose-commerce/core-nextjs";
import { CategoryAndProducts } from "../components/CategoryAndProducts";
import { ProductDetail } from "../components/ProductDetail";
import { MarketDetails } from "@jhoose-commerce/core";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string, lang: Locales }> }) {

  const { lang, slug } = await params;
  const segment = slug[slug.length - 1];
  const market = await getCurrentMarketFromCookie() ?? {} as MarketDetails;

  const dict = await getDictionary(lang as Locale);

  const { currentNode, genericNodes, genericProducts } = await getData(lang, segment, market?.marketName ?? "");

  const isProductDetail = (currentNode?._children?.GenericNode?.items?.length ?? 0) === 0 && genericProducts.length === 1;

  return (
    <main className=" p-24 w-full">
      
      {!isProductDetail ?
          <CategoryAndProducts 
            currentNode={currentNode as GenericNode} 
            genericNodes={genericNodes as GenericNode[]} 
            genericProducts={genericProducts as GenericProduct[]} 
            market={market} 
            lang={lang} /> :
          <ProductDetail product={genericProducts[0] as GenericProduct} labels={dict} />
      }

    </main>);
}




async function getData(languages: Locales, segment: string, market: string) {

  const { data } = await getClient().query(
    {
      query: ProductCategoryQuery,
      variables:
      {
        languages: languages,
        segment: segment
      }
    });

  const currentNode = data?.GenericNode?.items?.at(0) as any;
  const genericNodes = data?.GenericNode?.items?.at(0)?._children?.GenericNode?.items ?? [];

  if (data.GenericNode?.items?.length ?? 0 > 0) {
    const productResponse = await getClient().query(
      {
        query: ProductQuery,
        variables:
        {
          languages: languages,
          category: currentNode?.Code ?? "",
          market: market
        }
      });


    const genericProducts = productResponse.data?.GenericProduct?.items ?? [];
    return { currentNode, genericNodes, genericProducts };
  }
  else {
    const productResponse = await getClient().query(
      {
        query: GetProductQuery,
        variables:
        {
          languages: languages,
          segment: segment
        }
      });

    const genericProducts = productResponse.data?.GenericProduct?.items ?? [];

    return { currentNode, genericNodes, genericProducts };
  }

}
import ProductVariantsComponent from "@/app/[lang]/(shop)/products/components/ProductVariantsComponent";
import { GenericProduct } from "@/graphql/graphql";
import { ProductPrice, ProductSummaryProvider } from "@jhoose-commerce/components";

export type ProductDetailProps = {
  product: GenericProduct
  labels: any
}

export const ProductDetail = (props: ProductDetailProps) => {
  const imageUrl = `${process.env.COMMERCE_ENDPOINT}/${props.product.DefaultImageUrl}`;
  
  return (
    <div className='flex flex-row'>
      <div className="flex-none max-w-md">
        <img src={imageUrl} alt={props.product?.Name ?? ''} />
      </div>

      <ProductSummaryProvider productCode={props.product?.Code ?? ""}>
        <div className='flex flex-col px-3 grow'>
          <h1 className='text-2xl'>{props.product?.Name}</h1>
          <p className='text-xs text-slate-400'>{props.product?.Code}</p>
          <ProductPrice style='showDiscount' includePromotions={true} />
          <div className='mt-3' dangerouslySetInnerHTML={{ __html: props.product?.ProductTeaser ?? "" }}></div>
          <div className='h-40 mt-4 border-t-2'>

            <ProductVariantsComponent id={props.product?.ContentLink?.GuidValue ?? ""} code={props.product?.Code ?? ""} labels={props.labels} />

          </div>
          <div className='mt-3 prose' dangerouslySetInnerHTML={{ __html: props.product?.LongDescription ?? "" }}></div>
        </div>
      </ProductSummaryProvider>
    </div>
  );
};

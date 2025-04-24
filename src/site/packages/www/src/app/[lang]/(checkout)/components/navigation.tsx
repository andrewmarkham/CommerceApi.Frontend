import CartIcon from '@/app/components/icons/cartIcon';

export default function CheckoutNavigation(props: { lang: string, labels: any }) {

  const cartUrl = `/${props.lang}/cart`;
  return (
    <>
      <div className='fixed top-4 left-4 right-8 flex flex-row p-4 rounded-lg justify-items-center gap-8 border-b shadow-xl bg-white z-10 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40'>
        <div className='grow'>
          <span>{props.labels.navigation.logo}</span>
        </div>

        <div>
          <a href={cartUrl}>
            <CartIcon />
          </a>
        </div>
      </div>
    </>
  );
}






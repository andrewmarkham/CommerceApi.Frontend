'use client';

import CartIcon from '../../icons/cartIcon';
import { useState } from 'react';


import { Drawer, MiniCart } from '@jhoose-commerce/components';

import { Authentication } from './authentication';
import { Menu } from './menu';

export default function Navigation(props: { lang: string, labels: any }) {

  const [showMiniCart, setShowMiniCart] = useState(false);
  const checkoutUrl = `/${props.lang}/checkout`;
  return (
    <>
      <div className='fixed top-4 left-4 right-8 flex flex-row p-4 rounded-lg justify-items-center gap-8 border-b shadow-xl bg-white z-10 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40'>
        <div>
          <span>{props.labels.navigation.logo}</span>
        </div>
        <Menu className='grow' lang={props.lang} labels={props.labels}/>
        <div>
          <Authentication />
        </div>
        <div>
          <button onClick={() => setShowMiniCart(!showMiniCart)}>
            <CartIcon />
          </button>
        </div>
      </div>

      <Drawer heading={props.labels.minicart.heading} show={showMiniCart} close={() => setShowMiniCart(false)}>
        <MiniCart show={showMiniCart} checkoutUrl={checkoutUrl}  labels={props.labels.minicart} />
      </Drawer>
    </>
  );
}






import React from 'react';
import CartItemList from './component/CartItemList';
import PriceSummary from './component/PriceSummary';

const Cart = () => {
  return (
      <div className="w-full mt-20 flex-col-reverse flex sm:flex-row gap-8 sm:gap-16 justify-center">
        <CartItemList />
        <PriceSummary />
      </div>
    )
};

export default Cart;

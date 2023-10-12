import React from 'react';
import CartItemList from './component/CartItemList';
import PriceSummary from './component/PriceSummary';
import { useSelector } from 'react-redux';
import { EmptyCart } from '../../component';

const Cart = () => {
  const {cart} = useSelector(store => store?.cart);

  if(!cart.length) {
    return (
      <EmptyCart />
    )
  }
  return (
      <div className="w-full mt-20 flex-col-reverse flex sm:flex-row gap-8 sm:gap-16 justify-center">
        <CartItemList />
        <PriceSummary />
      </div>
    )
};

export default Cart;

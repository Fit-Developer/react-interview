import React, { ReactNode } from "react";
import CartListItem from "./CartListItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItem);
  return (
    <div className="space-y-3">
      {cart.map((item) => (
        <CartListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;

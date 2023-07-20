import React, { useState } from "react";
import { CartIcon } from "./Icon";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Cart from "./Cart";
import Modal from "./Modal";

const Header: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItem);
  const [CartModal, setCartModal] = useState(false);
  return (
    <>
      <div className=" shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)]">
        <div className="container">
          <div className="flex justify-between py-6">
            <div>
              <img src="/assets/dh-logo.svg" alt="Drive Hub Logo" />
            </div>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setCartModal(true)}
            >
              <div className="relative">
                <CartIcon />
                {cart.length > 0 && (
                  <div className="w-[12px] h-[12px] bg-[#EF4444] rounded-full absolute -top-1 -right-1" />
                )}
              </div>
              <span className="font-medium">Cart ({cart.length})</span>
            </div>
          </div>
        </div>
      </div>
      {CartModal && (
        <Modal title="Cart" onClose={() => setCartModal(false)}>
          <Cart />
        </Modal>
      )}
    </>
  );
};

export default Header;

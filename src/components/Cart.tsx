import React, { useState, useEffect } from "react";
import CartListItem from "./CartListItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CartItem } from "../redux/cartSlice";
import { PriceFormat } from "../utils";
import { useFetch } from "../hooks/useFetch";

const Cart: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [codeStatus, setCodeStatus] = useState("");
  const cart = useSelector((state: RootState) => state.cart.cartItem);
  const { data: discountApi } = useFetch(
    "/spaces/vveq832fsd73/entries?content_type=discount"
  );

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  useEffect(() => {
    getDiscount();
  }, [discountCode]);

  const getTotalPrice = (): void => {
    const total = cart.reduce((total, item: CartItem) => {
      return total + item.price * item.quantity;
    }, 0);

    setTotalPrice(total);
  };

  const getDiscount = (): void => {
    if (discountCode.length >= 5) {
      const { items } = discountApi;
      const amount = items.find(
        (item: any) => item.fields.code === discountCode
      )?.fields?.amount;
      if (amount) {
        setDiscountPrice(amount);
        setCodeStatus("valid");
      } else {
        setDiscountPrice(0);
        setCodeStatus("invalid");
      }
    } else {
      setDiscountPrice(0);
    }
  };

  return (
    <div className="h-[500px] md:h-[600px] flex flex-col justify-between">
      <div className="space-y-3 h-[300px] lg:h-[400px] overflow-scroll">
        {cart.length === 0 && (
          <div className="text-center pt-3 text-gray-500 font-light">
            No items!!
          </div>
        )}
        {cart.map((item) => (
          <CartListItem key={item.id} {...item} />
        ))}
      </div>
      <div>
        <div className="bg-[#F3F4F6] p-3">
          <input
            type="text"
            placeholder="Discount code"
            className="w-full border rounded py-2 px-4 placeholder:text-[#D1D5DB] placeholder:font-light"
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          {discountCode.length >= 5 && codeStatus && (
            <div className="text-sm pl-2 pt-1">
              {codeStatus === "valid" ? (
                <span className="text-green-500">Available code.</span>
              ) : (
                <span className="text-red-500">Invalid code.</span>
              )}
            </div>
          )}
        </div>
        <div className="pt-3">
          <div className="flex justify-between text-[20px] border-b mb-2 pb-2">
            <h1 className="font-bold">Total</h1>
            <h2>{PriceFormat(totalPrice)} THB</h2>
          </div>
          <div className="flex justify-between text-[20px] border-b mb-2 pb-2">
            <h1 className="font-bold">Discount</h1>
            <h2>{discountPrice ? PriceFormat(discountPrice) : 0} THB</h2>
          </div>
          <div className="flex justify-between text-[20px] border-b mb-2 pb-2">
            <h1 className="font-bold">Grand Total</h1>
            <h2>
              {discountPrice
                ? PriceFormat(totalPrice - discountPrice)
                : PriceFormat(totalPrice)}
              THB
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

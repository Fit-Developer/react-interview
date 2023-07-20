import React from "react";
import {
  CartItem,
  decrementQuantity,
  incrementQuantity,
} from "../redux/cartSlice";
import { AddIcon, RemoveIcon } from "./Icon";
import { PriceFormat } from "../utils";

import { useDispatch } from "react-redux";

const CartListItem: React.FC<CartItem> = ({
  id,
  title,
  photo,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  const onImageError = (e: any) => {
    e.target.src = "/assets/notfound.png";
  };

  return (
    <div className="w-full border-b pb-3">
      <div className="flex justify-between items-center text-left">
        <div className="flex gap-3">
          <div className="w-[87px] h-[54px] rounded overflow-hidden hidden md:block">
            <img
              onError={onImageError}
              className="w-full h-full object-cover"
              src={photo}
              alt={title}
            />
          </div>
          <div>
            <h1 className="text-[16px] md:text-[20px] font-bold">{title}</h1>
            <h2 className="text-[14px] font-medium">
              {PriceFormat(price)} THB/Day
            </h2>
          </div>
        </div>
        <div className="flex w-[100px] md:w-[150px] justify-between items-center">
          <button
            className="bg-[#3B82F6] w-[30px] h-[30px] rounded-lg flex items-center justify-center"
            onClick={() => {
              dispatch(incrementQuantity({ id }));
            }}
          >
            <AddIcon />
          </button>
          <div className="text-[20px] md:text-[24px]">{quantity}</div>
          <button
            className="bg-[#3B82F6] w-[30px] h-[30px] rounded-lg flex items-center justify-center"
            onClick={() => {
              dispatch(decrementQuantity({ id }));
            }}
          >
            <RemoveIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartListItem;

import React from "react";
import { ICar } from "../App";

const CarListItem: React.FC<ICar> = ({ title, photo, price }) => {
  const onImageError = (e: any) => {
    e.target.src = "/assets/notfound.png";
  };

  return (
    <div className="shadow-[0px_4px_6px_-1px_#0000001A] rounded-[16px] overflow-hidden bg-white">
      <div className="w-full h-[185px]">
        <img
          onError={onImageError}
          className="w-full h-full object-cover"
          src={photo}
          alt={title}
        />
      </div>
      <div className="px-3 py-3 space-y-3">
        <div>
          <h1 className="text-[20px] font-bold">{title}</h1>
          <h2 className="text-[14px] font-medium">
            {`${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} THB/Day
          </h2>
        </div>
        <button className="w-full h-[56px] bg-[#3B82F6] text-white rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default CarListItem;

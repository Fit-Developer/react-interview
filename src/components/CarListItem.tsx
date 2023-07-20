import React from "react";

const CarListItem: React.FC = () => {
  return (
    <div className="shadow-[0px_4px_6px_-1px_#0000001A] rounded-[16px] overflow-hidden bg-white">
      <div className="w-full h-[185px]">
        <img
          className="w-full h-full object-cover"
          src="https://www.autotirechecking.com/wp-content/uploads/Honda-Civic-eHEV-2022-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2-3.jpg"
          alt=""
        />
      </div>
      <div className="px-3 py-3 space-y-3">
        <div>
          <h1 className="text-[20px] font-bold">Honda CIVIC</h1>
          <h2 className="text-[14px] font-medium">1,400 THB/Day</h2>
        </div>
        <button className="w-full h-[56px] bg-[#3B82F6] text-white rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default CarListItem;

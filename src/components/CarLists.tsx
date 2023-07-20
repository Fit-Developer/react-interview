import React from "react";
import CarListItem from "./CarListItem";
const CarLists: React.FC = () => {
  return (
    <div className="bg-[#F3F4F6] py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
        </div>
      </div>
    </div>
  );
};
export default CarLists;

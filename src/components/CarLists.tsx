import React from "react";
import CarListItem from "./CarListItem";
import { ICar } from "../App";

const CarLists: React.FC<{ items: ICar[] }> = ({ items }) => {
  return (
    <div className="bg-[#F3F4F6] py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, key) => (
            <CarListItem key={key} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarLists;

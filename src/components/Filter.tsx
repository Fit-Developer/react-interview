import React from "react";
import { SortIcon } from "./Icon";

interface Props {
  title: string;
  search: boolean;
  sort: boolean;
}
const Filter: React.FC<Props> = ({ title, search, sort }) => {
  return (
    <div className="py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-[30px] font-medium">{title}</h1>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <input
              className="max-w-full w-full md:w-[300px] border border-[#D1D5DB] h-[40px] px-3 rounded-md"
              type="text"
              placeholder="Search Car"
            />
            <div className="w-full md:w-[200px] flex items-center border border-[#D1D5DB] h-[40px] px-3 rounded-md gap-2">
              <SortIcon />
              <select name="" className="focus:outline-none">
                <option value="">Price Low - High</option>
                <option value="">Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

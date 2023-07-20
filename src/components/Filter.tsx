import React from "react";
import { SortIcon } from "./Icon";

interface Props {
  title: string;
  search: boolean;
  sort: boolean;
  onSearch: (query: string) => void;
  onSort: (query: string) => void;
}

const Filter: React.FC<Props> = ({ title, search, sort, onSearch, onSort }) => {
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
              onChange={(e) => onSearch(e.target.value)}
            />
            <div className="w-full md:w-[200px] flex items-center border border-[#D1D5DB] h-[40px] px-3 rounded-md gap-2">
              <SortIcon />
              <select
                name=""
                className="focus:outline-none"
                onChange={(e) => onSort(e.target.value)}
              >
                <option value="price">Price Low - High</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

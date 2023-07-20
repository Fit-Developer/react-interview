import React from "react";
import { CartIcon } from "./Icon";

const Header: React.FC = () => {
  return (
    <div className=" shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)]">
      <div className="container">
        <div className="flex justify-between py-6">
          <div>
            <img src="/assets/dh-logo.svg" alt="Drive Hub Logo" />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <CartIcon />
              <div className="w-[12px] h-[12px] bg-[#EF4444] rounded-full absolute -top-1 -right-1" />
            </div>
            <span className="font-medium">Cart (0)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

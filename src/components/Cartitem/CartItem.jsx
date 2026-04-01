import React from "react";
import Product from "./../product/Product";

const CartItem = ({ pro }) => {
  return (
    <div className="w-full bg-[#F9FAFC] p-5  rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="img h-15 w-15 rounded-full border border-[#F2F2F2] flex items-center justify-center">
          <img src={pro.icon} alt="" />
        </div>
        <div>
          <h1 className="text-[20px] font-semibold text-[#101727]">
            {pro.name}
          </h1>
          <p className="text-base text-[#627382] font-medium">${pro.price}</p>
        </div>
      </div>
      <span className="text-red-500">remove</span>
    </div>
  );
};

export default CartItem;

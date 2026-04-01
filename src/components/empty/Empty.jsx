import React from "react";

import { ShoppingCart } from "lucide-react";

const Empty = () => {
  return (
    <div className="w-full flex justify-center flex-col gap-2 items-center border-2 py-5 border-[#ddddddde] rounded-xl ">
      <ShoppingCart size={80}></ShoppingCart>
      <h2 className="text-black text-4xl font-extrabold">Your Cart is Empty</h2>
      <p className="text-[#627382] text-base text-center">
        It looks like you haven’t added anything to your cart yet. Browse
        products and add items to get started
      </p>
    </div>
  );
};

export default Empty;

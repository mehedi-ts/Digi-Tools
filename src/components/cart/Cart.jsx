import React from "react";
import Empty from "../empty/Empty";
import CartItem from "../Cartitem/CartItem";

const Cart = ({ cartProduct, handleChackout }) => {
  console.log(cartProduct);
  const total = Math.round(
    cartProduct.reduce((sum, item) => sum + item.price, 0),
  );
  if (cartProduct.length === 0) {
    return <Empty></Empty>;
  }

  return (
    <div className="w-full border-2 border-[#F2F2F2] rounded-lg flex flex-col gap-6 md:p-10 p-4">
      <h5 className="text-2xl font-bold text-[#101727]">Your Cart</h5>
      <div className="cart-item flex flex-col gap-2">
        {cartProduct.map((pro) => (
          <CartItem pro={pro}></CartItem>
        ))}
      </div>
      <div className=" flex items-center justify-between">
        <p className="text-base text-[#627382]">Totle :</p>
        <p className="text-2xl font-bold text-[#101727]">${total}</p>
      </div>
      <button
        onClick={() => handleChackout()}
        className="btn w-full px-4 py-3 bg-linear-to-r from-[#5337F6] to-[#9215FA] text-white text-base font-bold rounded-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;

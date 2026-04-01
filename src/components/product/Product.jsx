import React from "react";

const Product = ({ product, handleCartProducts, cartProduct }) => {
  const isInCart = cartProduct.some((item) => item.id === product.id);
  const { name, description, price, period, tag, features, icon } = product;

  return (
    <div className="card w-full h-full bg-base-100 shadow-sm border border-[#F2F2F2] p-6">
      <div className="tag  flex items-center justify-end">
        <span
          className={`${tag === "best seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : tag === "popular" ? "bg-[#E1E7FF] text-[#7F20F9]" : "bg-[#DBFCE7] text-[#0A883E]"} px-3 py-1.5 rounded-full `}
        >
          {tag}
        </span>
      </div>
      <div className="contant flex flex-col h-full gap-4">
        <div className="img h-15 w-15 rounded-full border border-[#F2F2F2] flex items-center justify-center">
          <img src={icon} alt="" />
        </div>
        <h3 className="font-bold text-2xl text-[#101727]">{name}</h3>
        <p className="text-base text-[#627382]">{description}</p>
        <p className="text-base text-[#627382]">
          <span className="font-bold text-2xl text-[#101727]">{price}$</span>/
          {period}
        </p>
        <ul className=" flex flex-col flex-1 h-full gap-2  text-base text-[#627382]">
          {features.map((feature) => (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="bt">
          <button
            onClick={() => handleCartProducts(product)}
            className={`btn btn-primary w-full rounded-full py-3 px-4   ${isInCart ? "btn-disabled text-black" : " bg-linear-to-r from-[#5337F6] to-[#9215FA]"}`}
          >
            {isInCart ? "Added to cart" : "Buy now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

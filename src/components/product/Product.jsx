import React from "react";
import producIcon from "../../assets/products/design-tool.png";

const Product = ({ product, handleCartProducts }) => {
  return (
    <div className="card w-full bg-base-100 shadow-sm border border-[#F2F2F2] p-6">
      <div className="tag  flex items-center justify-end">
        <span className="bg-[#FEF3C6] px-3 py-1.5 rounded-full">
          Best Seller
        </span>
      </div>
      <div className="contant flex flex-col gap-4">
        <div className="img h-15 w-15 rounded-full border border-[#F2F2F2] flex items-center justify-center">
          <img src={producIcon} alt="" />
        </div>
        <h3 className="font-bold text-2xl text-[#101727]">AI Writing Pro</h3>
        <p className="text-base text-[#627382]">
          Generate high-quality content, blogs, and marketing copy in seconds
          with advanced AI.
        </p>
        <p className="text-base text-[#627382]">
          <span className="font-bold text-2xl text-[#101727]">29$</span>/month
        </p>
        <ul className=" flex flex-col gap-2  text-base text-[#627382]">
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
            <span>High-resolution image generation</span>
          </li>
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
            <span>Customizable style templates</span>
          </li>
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
            <span>Batch processing capabilities</span>
          </li>
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
            <span>AI-driven image enhancements</span>
          </li>
        </ul>
        <div className="bt">
          <button className="btn btn-primary w-full rounded-full py-3 px-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

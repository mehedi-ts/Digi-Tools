import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = ({ cartCount }) => {
  const lists = (
    <>
      <li>
        <a className="text-base font-semibold">Products</a>
      </li>
      <li>
        <a className="text-base font-semibold">Features</a>
      </li>
      <li>
        <a className="text-base font-semibold">Pricing</a>
      </li>
      <li>
        <a className="text-base font-semibold">Testimonials</a>
      </li>
      <li>
        <a className="text-base font-semibold">FAQ</a>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm py-2 ">
      <div className="max-w-325 navbar  mx-auto">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  font-bold "
            >
              {lists}
            </ul>
          </div>
          <a className=" text-2xl md:text-3xl font-bold bg-linear-to-r from-[#5337F6] to-[#9215FA] bg-clip-text text-transparent">
            Digi Tools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{lists}</ul>
        </div>
        <div className="navbar-end gap-5 ">
          <a className=" cursor-pointer  relative">
            <div className="bg-[#FF3B30] h-5 w-5 rounded-full flex items-center justify-center text-white text-[10px] font-medium  absolute -top-3 left-3">
              <span>{cartCount}</span>
            </div>
            <ShoppingCart size={20}></ShoppingCart>
          </a>
          <a className="text-base font-semibold cursor-pointer">Login</a>
          <a className="btn rounded-full text-base font-semibold bg-linear-to-r from-[#5337F6] to-[#9215FA] text-white hidden md:flex">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

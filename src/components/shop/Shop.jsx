import React, { Suspense, useMemo, useState } from "react";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import { toast } from "react-toastify";

const Shop = () => {
  const ProductsPromise = useMemo(() => {
    return fetch("/data.json").then((res) => res.json());
  }, []);

  const [cartProduct, setCartProduct] = useState([]);
  const handleCartProduct = (product) => {
    setCartProduct((cartProduct) => [...cartProduct, product]);
    toast.success("Product added to cart successfully");
  };
  const handleChackout = () => {
    setCartProduct([]);
    toast.success("Checkout completed successfully");
  };
  const handleCartDelet = (id) => {
    const remaining = cartProduct.filter((product) => product.id !== id);
    setCartProduct(remaining);
    toast("Removed from cart successfully!");
  };

  const [toggle, setToggle] = useState("products");
  const HandleToggle = (togg) => {
    setToggle(togg);
  };

  return (
    <div className="py-28">
      <div className="main-shop max-w-325  mx-auto">
        <div className="shop-title flex flex-col items-center gap-4 text-center mb-10">
          <h2 className="text-[#101727] text-3xl md:text-5xl font-extrabold">
            Premium Digital Tools
          </h2>
          <p className="text-[#627382] text-base">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
          <div className="shop-btns border-2 border-[#e4e2e289] h-fit flex items-center px-0.5 rounded-full ">
            <button
              onClick={() => HandleToggle("products")}
              className={`${toggle === "products" ? "btn text-white bg-linear-to-r from-[#5337F6] to-[#9215FA] px-4 py-3 rounded-full  " : "px-4 py-3 rounded-full text-[#25065D]"} border-none text-base  font-medium transition-all duration-300 `}
            >
              Products
            </button>
            <button
              onClick={() => HandleToggle("cart")}
              className={`${toggle === "cart" ? "btn bg-linear-to-r from-[#5337F6] to-[#9215FA] text-white px-4 py-3 rounded-full " : "px-4 py-3 rounded-full text-[#25065D]"} text-base font-medium transition-all duration-300 border-none`}
            >
              Cart ({cartProduct.length})
            </button>
          </div>
        </div>
        <div>
          {toggle === "products" ? (
            <Suspense fallback={<p>loading...</p>}>
              <Products
                ProductsPromise={ProductsPromise}
                handleCartProduct={handleCartProduct}
                cartProduct={cartProduct}
              ></Products>
            </Suspense>
          ) : (
            <Cart
              cartProduct={cartProduct}
              handleChackout={handleChackout}
              handleCartDelet={handleCartDelet}
            ></Cart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;

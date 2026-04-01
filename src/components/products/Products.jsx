import React, { use } from "react";
import Product from "../product/Product";

const Products = ({ ProductsPromise, handleCartProduct, cartProduct }) => {
  const productsData = use(ProductsPromise);

  return (
    <div className=" border-amber-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center w-full lg:px-0 px-2 md:px-0">
      {productsData.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleCartProducts={handleCartProduct}
          cartProduct={cartProduct}
        ></Product>
      ))}
    </div>
  );
};

export default Products;

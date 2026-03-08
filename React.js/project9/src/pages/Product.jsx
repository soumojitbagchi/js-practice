import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="font-bold text-9xl">Product Page</h1>
      <div className="flex flex-row font-black underline text-3xl gap-2.5 ml-2">
        <Link to="/product/men">Men's Porduct</Link>
        <Link to="/product/women">Women's Porduct</Link>
      </div>
    </div>
  );
};

export default Product;

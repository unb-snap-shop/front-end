import React from "react";
import Button from "../components/button/Button";
import ProductList from "../components/products/ProductsList";
import Product from "../components/product/Product";
import OrderUpdate from "../components/order_service/OrderUpdate";

const HomePage = () => {
  const handleButtonClick = () => {
    console.log("Button clicked")
  };

  return (
    <>
      <ProductList/>
      <OrderUpdate/>   
    </>
  );
};

export default HomePage;

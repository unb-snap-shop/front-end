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
    <div className="homepage">
      <h1 className="text-4xl font-extrabold dark:text-black">Snap-Shop</h1>
      <Button
        text="Explore Collections"
        onClick={handleButtonClick}
        type="primary"
      />
      <Button
        text="Customer Service"
        onClick={handleButtonClick}
        type="primary"
      />
      <Button text="Payment" onClick={handleButtonClick} type="primary" />
      <ProductList/>
      <OrderUpdate/>   
    </div>
  );
};

export default HomePage;

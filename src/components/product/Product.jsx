import React from "react";
import axios from "axios";


const Product = ({ product }) => {
  /**
   * {
        "id": 4,
        "type": "GPU",
        "brand": "AMD",
        "model": "Radeon RX 6800 XT",
        "specifications": {
          "memory": "16 GB GDDR6",
          "gameClock": "2015 MHz",
          "boostClock": "2250 MHz",
          "tdp": "300W"
        },
        "price": 649.99
      },
   */
  if (!product) {
    return <div>Loading...</div>;
  }

  const specs = product?.specifications

  const handleClick = async () => {
    try{
      const response = await axios.post("http://localhost:5001/add_to_cart", {
        productId: product.id,
        productBrand: product.brand,
        productName: product.model,
        productPrice: product.price
      });
      console.log("Add to cart response:", response.data)
    } catch (error) {
      console.error("Error adding to cart:", error)
    }
  }

  return (
    // from flowbite using tailwind
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="src\assets\react.svg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.brand + " " + product.model}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <ul>
            {Object.entries(specs).map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          {product.price}
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Product;

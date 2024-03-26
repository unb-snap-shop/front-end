import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/product/Product";


const Cart = () => {


  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch cart from Flask API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/get_cart")
        setProducts(response.data)
        console.log(response.data)
      } catch (error) {
        const errorMessage = error.response ? `HTTP error! Status: ${error.response.status}` : error.message;
        setError(errorMessage);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Endpoint</h1>
      <div>
        {/*<h1>{products}</h1> */}

        {products.map((product) => (
          <>
            <h3>{product.productName}</h3>
          </>
        ))}
      </div>
    </div>
  );

}

export default Cart;
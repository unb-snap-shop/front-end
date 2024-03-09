import React, { useState, useEffect } from "react";
import Product from "../product/Product";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch products from Flask API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
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
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <>
            <Product product={product}/>
          </>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

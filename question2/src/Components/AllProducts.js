import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/product?page=${count}`
      );
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="bg-gradient-to-r from-purple-400 to-indigo-500 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Browse Our Collection
        </h1>
        <Link to="/filter">
          <button>Filter Button</button>
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-4 text-left">Product Name</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Rating</th>
                <th className="py-3 px-4 text-left">Discount</th>
                <th className="py-3 px-4 text-left">Availability</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-4">{product.name_pro}</td>
                    <td className="py-4 px-4">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-4 text-yellow-600">
                      {product.rating} stars
                    </td>
                    <td className="py-4 px-4 text-green-600">
                      {product.discount}% off
                    </td>
                    <td className="py-4 px-4">
                      {product.availability === "yes" ? (
                        <span className="text-green-600">In Stock</span>
                      ) : (
                        <span className="text-red-600">Out of Stock</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <Link
                        to={`/product/${product.id_products}`}
                        className="text-blue-500 hover:underline"
                      >
                        View Product
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-8">
          <button
            className={`bg-purple-600 text-white px-4 py-2 rounded-lg ${
              count === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
            disabled={count === 1}
          >
            Prev
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

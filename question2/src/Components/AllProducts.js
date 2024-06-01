import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/product?page=" + count
      );
      console.log(response.data.data);
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Product Name</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold ">
                <div className="flex flex-row justify-between">
                  <p>Price</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Rating</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Discount</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                <div className="flex flex-row justify-between">
                  <p>Availability</p>
                  <button>:</button>
                </div>
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          {products.length > 0 ? (
            <tbody>
              {products?.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-800">
                    {product.name_pro}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-gray-700">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-yellow-500">
                    {product.rating} stars
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-green-600">
                    {product.discount}% off
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.availability === "yes" ? (
                      <span className="text-green-600">Yes</span>
                    ) : (
                      <span className="text-red-600">Out of stock</span>
                    )}
                  </td>
                  <td>
                    <Link
                      to={`/product/${index}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Product
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No products found
                </td>
              </tr>
            </tbody>
          )}
        </table>
        <div className="flex justify-end">
          {count > 1 && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg m-4"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Prev
            </button>
          )}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg m-4"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

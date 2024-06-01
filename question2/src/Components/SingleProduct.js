import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/singleProduct/" + id
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {product && (
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Product Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-700">Product ID:</p>
                <p className="text-gray-900">{product.id_products}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Name:</p>
                <p className="text-gray-900">{product.name_pro}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Category:</p>
                <p className="text-gray-900">{product.category_name}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Price:</p>
                <p className="text-gray-900">${product.price}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Discount:</p>
                <p className="text-gray-900">{product.discount}%</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Rating:</p>
                <p className="text-yellow-400">{"★".repeat(product.rating)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;

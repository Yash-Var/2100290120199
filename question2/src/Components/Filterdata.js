import React, { useState, useEffect } from "react";
import axios from "axios";

const TopProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyId: "",
    categoryId: "",
    minPrice: "",
    maxPrice: "",
    limit: "",
    page: "1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/getProductsTop", {
        params: {
          companyId: formData.companyId,
          categoryId: formData.categoryId,
          minPrice: formData.minPrice,
          maxPrice: formData.maxPrice,
          limit: formData.limit,
          page: formData.page,
        },
      });
      setProducts(response.data.data);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Optionally, you can handle errors here, like displaying an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Top Products</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="companyId" className="block mb-1">
              Company ID:
            </label>
            <input
              type="text"
              id="companyId"
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="categoryId" className="block mb-1">
              Category ID:
            </label>
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="minPrice" className="block mb-1">
              Min Price:
            </label>
            <input
              type="text"
              id="minPrice"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="maxPrice" className="block mb-1">
              Max Price:
            </label>
            <input
              type="text"
              id="maxPrice"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="limit" className="block mb-1">
              Limit:
            </label>
            <input
              type="text"
              id="limit"
              name="limit"
              value={formData.limit}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Fetch Products
        </button>
      </form>
      {loading && <div className="mt-8 text-center">Loading...</div>}
      {!loading && (
        <div className="mt-8">
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="border rounded-lg p-4">
                <p className="text-lg font-semibold">Title: {product.title}</p>
                <p>Rating: {product.rating}</p>
                <p>Price: {product.price}</p>
                <p>Categories: {product.categories}</p>
              </li>
            ))}
          </ul>
          {pagination && (
            <div className="mt-8 flex justify-between">
              <p>Total Records: {pagination.total_records}</p>
              <div className="space-x-4">
                {pagination.prev_page && (
                  <button
                    onClick={() =>
                      setFormData({ ...formData, page: pagination.prev_page })
                    }
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                  >
                    Previous Page
                  </button>
                )}
                {pagination.next_page && (
                  <button
                    onClick={() =>
                      setFormData({ ...formData, page: pagination.next_page })
                    }
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                  >
                    Next Page
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopProductsComponent;

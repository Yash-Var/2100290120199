import "./App.css";
import React from "react";
import Header from "./Components/Header";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filterdata from "./Components/Filterdata";
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AllProducts />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "/f",
    element: <Filterdata />,
  },
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={BrowserRouter} />
    </>
  );
}

export default App;

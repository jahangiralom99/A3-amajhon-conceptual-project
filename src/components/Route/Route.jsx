import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "products/products/:id",
        element: <SingleProduct></SingleProduct>,
        loader: ({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ],
  },
]);

export default router;

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import NotFound from "./components/NotFound";

if(localStorage.getItem('Cart') === null){
  let cartList = [];
  localStorage.setItem('Cart', JSON.stringify({
    cartList
  }));
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/producto/:id",
    element: <Product />,
  },
  {
    path: "/carrito",
    element: <Cart />,
  },  
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

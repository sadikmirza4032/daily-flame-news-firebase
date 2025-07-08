import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AllCategory from "./Pages/AllCategory";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NewsDetails from "./Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" replace></Navigate>,
      },
      {
        path: "/category/:id",
        element: <AllCategory></AllCategory>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
 {
  path: "/news/:id",
  element: <PrivateRoutes>
    <NewsDetails></NewsDetails>
  </PrivateRoutes>,
 loader: () =>
          fetch(
            "https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a"
          ),
},
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;

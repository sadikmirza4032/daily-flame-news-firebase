import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./Routes/router.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx"; 
import { RouterProvider } from "react-router-dom";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}  fallbackElement={<p>Loading...</p>} ></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

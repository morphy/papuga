import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ItemsPage from "./pages/ItemsPage";
import SetsPage from "./pages/SetsPage";
import CarsPage from "./pages/CarsPage";
import InspectionsPage from "./pages/InspectionsPage";
import RentalsPage from "./pages/RentalsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "items",
        element: <ItemsPage />
      },
      {
        path: "sets",
        element: <SetsPage />
      },
      {
        path: "cars",
        element: <CarsPage />
      },
      {
        path: "rentals",
        element: <RentalsPage />
      },
      {
        path: "inspections",
        element: <InspectionsPage />
      }
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

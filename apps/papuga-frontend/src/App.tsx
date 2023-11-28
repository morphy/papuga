import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorScreen from "./screens/ErrorScreen";
import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";
import ItemsScreen from "./screens/ItemsScreen";
import SetsScreen from "./screens/SetsScreen";
import CarsScreen from "./screens/CarsScreen";
import InspectionsScreen from "./screens/InspectionsScreen";
import RentalsScreen from "./screens/RentalsScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "home",
        element: <HomeScreen />
      },
      {
        path: "items",
        element: <ItemsScreen />
      },
      {
        path: "sets",
        element: <SetsScreen />
      },
      {
        path: "cars",
        element: <CarsScreen />
      },
      {
        path: "rentals",
        element: <RentalsScreen />
      },
      {
        path: "inspections",
        element: <InspectionsScreen />
      }
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

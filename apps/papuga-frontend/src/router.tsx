import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import ErrorScreen from "./screens/ErrorScreen";
import HomeScreen from "./screens/HomeScreen";
import ItemsScreen from "./screens/ItemsScreen";
import SetsScreen from "./screens/SetsScreen";
import CarsScreen from "./screens/CarsScreen";
import RentalsScreen from "./screens/RentalsScreen";
import InspectionsScreen from "./screens/InspectionsScreen";
import LoginScreen from "./screens/LoginScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
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
      },
      {
        path: "login",
        element: <LoginScreen />
      }
    ]
  }
]);

export default router;

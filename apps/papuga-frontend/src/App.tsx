import React from "react";
import { RouterProvider } from "react-router-dom";

import { UserContextProvider } from "./UserContext";
import router from "./router";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
};

export default App;

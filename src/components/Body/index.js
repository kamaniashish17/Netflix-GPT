import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import BrowsePage from "../../containers/BrowsePage";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../../containers/LoginPage";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

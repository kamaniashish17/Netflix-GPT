import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import BrowsePage from "../../containers/BrowsePage";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../../containers/LoginPage";
import SearchPage from "../../containers/SearchPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


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
    {
      path:"/search",
      element: <SearchPage />
    }
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

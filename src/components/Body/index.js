import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Browse from "../Browse";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../../containers/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    console.log("Hi")
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Hi")
        const { uid, email, displayName } = user;
        dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName
        }))
      } else {
        dispatch(removeUser())
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

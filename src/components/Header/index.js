import React from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import store from "../../utils/store";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  // const handleDropdown = () =>{
  //   console.log("Hi from dropdown")
  // }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Succesfully");
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Some error occured while Signing Out", error);
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48"
      />

      {user && (
        <div className="flex p-2 items-center">
          <img
            className="w-14 h-14"
            src="https://occ-0-54-47.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
            alt="usericon"
          />
          {/* <button className="arrow border-white border-solid border-4 border-b-0 h-0 w-0 ml-5 border-x-transparent" onClick={handleDropdown}></button> */}
          <button className="text-white ml-5" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

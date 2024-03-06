import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import store from "../../utils/store";
import { LOGO_URL, PROFILE_URL } from "../../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleDropdown = () =>{
  //   console.log("Hi from dropdown")
  // }
  useEffect(() => {
    console.log("Hi")
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Hi")
        const { uid, email, displayName } = user;
        dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName
        }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    return ()=> unsubscribe()
  }, []);

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
    <div className= {!user  ? `absolute w-full px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between` :` absolute w-full px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between` }>
      <img
        src={LOGO_URL}
        alt="logo"
        className="w-48"
      />

      {user && (
        <div className="flex p-2 items-center">
          <img
            className="w-14 h-14"
            src={PROFILE_URL}
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

import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import {
  LOGO_URL,
  PROFILE_URL,
  SUPPORTED_LANGUAGES,
} from "../../utils/constants";
import { toggleGPTSearchView } from "../../utils/searchSlice";
import { changeLanguage } from "../../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGPTSearchView = useSelector(
    (store) => store.gptSearch.showGPTSearch
  );
  // const handleDropdown = () =>{
  //   console.log("Hi from dropdown")
  // }

  const handleGPTSearch = () => {
    console.log("logged every time");
    // Toggle GPT Search Button
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  // useEffect(()=>{
  //   if(showGPTSearchView){
  //     navigate("/search")
  //   }
  //   else{
  //     navigate("/browse")
  //   }
  // }, [])

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
    <div
      className={
        !user
          ? `absolute w-full px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between`
          : ` absolute w-full px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between`
      }
    >
      <img src={LOGO_URL} alt="logo" className="w-48" />

      {user && (
        <div className="flex p-2 items-center">
          {showGPTSearchView && (
            <select
              className="p-2 m-2 bg-black text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="py-2 px-4 m-2 text-white bg-slate-500 rounded-lg"
            onClick={handleGPTSearch}
          >
            {showGPTSearchView ? "Back to Browse Page" : "GPT Search"}
          </button>
          <img className="w-14 h-14" src={PROFILE_URL} alt="usericon" />
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

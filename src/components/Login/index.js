import React, { useState, useRef } from "react";
import {
  checkValidLoginData,
  checkValidRegistartionData,
} from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { LOGIN_IMAGE_URL, PROFILE_URL } from "../../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    console.log("Sign In Form Toggled");
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleClickButton = () => {
    //Form Validation
    if (isSignInForm) {
      const message = checkValidLoginData(
        email.current.value,
        password.current.value
      );
      console.log(message);
      setErrorMessage(message);
      if (message) return;
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Successfully Signed In!!!!!!!", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    } else {
      const message = checkValidRegistartionData(
        name.current.value,
        email.current.value,
        password.current.value
      );
      console.log(message);
      setErrorMessage(message);
      if (message) return;
      // Signing up the user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Successfully registered!!!!!", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:PROFILE_URL
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL:photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="absolute">
        <img
          src={LOGIN_IMAGE_URL}
          alt="backgroundLoginImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-32 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-90"
      >
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <p className="text-red-600 font-bold py-2 text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleClickButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-400">
          {isSignInForm ? `New to Netflix ?` : `Already a registered user ?`}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? ` Sign Up Now` : " Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

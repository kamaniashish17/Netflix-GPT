import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    console.log("Sign In Form Toggled");
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/6f5fcbd6-993f-4d76-b207-799c937026ae/US-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="backgroundLoginImage"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-32 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-90">
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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

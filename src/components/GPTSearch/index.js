import React from "react";
import GPTSearchBar from "../GPTSearchBar";
import GPTMovieSuggestion from "../GPTMovieSuggestion";
import { LOGIN_IMAGE_URL } from "../../utils/constants";
const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img className="h-screen object-cover md:w-screen" src={LOGIN_IMAGE_URL} alt="backgroundLoginImage" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;

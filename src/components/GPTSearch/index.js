import React from "react";
import GPTSearchBar from "../GPTSearchBar";
import GPTMovieSuggestion from "../GPTMovieSuggestion";
import { LOGIN_IMAGE_URL } from "../../utils/constants";
const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img src={LOGIN_IMAGE_URL} alt="backgroundLoginImage" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;

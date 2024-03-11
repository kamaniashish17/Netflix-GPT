import React from "react";
import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 rounded-l bg-black">
        <input
          type="textbox"
          className="p-4 m-4 col-span-10 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="col-span-2 py-2 px-4 bg-red-700 text-white rounded-lg m-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

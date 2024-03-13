import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import openai from "../../utils/openAI";
import { API_OPTIONS } from "../../utils/constants";
import { addGPTResultMovies } from "../../utils/searchSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //Fetch Movie From TMDB
  const searchMoveFromTMDB = async (movie) => {
    console.log(movie, typeof movie);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("JSON", json.results);
    return json.results
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me the name of 5 movies, comma separated like the example result given ahead. Example Result:xyz,abc,qwerty,rokvnreovnoi,sodnoiewn";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      console.error("API Failed!!!!!!!");
    }

    console.log("GPT Results", gptResult.choices?.[0]?.message?.content);
    const gptMovieList = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovieList.map((movie) => {
      return searchMoveFromTMDB(movie);
    });

    const tmdbResults = await Promise.all(promiseArray);

    console.log("TMDB Results", tmdbResults);
    dispatch(
      addGPTResultMovies({
        gptMovieNames: gptMovieList,
        gptMovieDetails: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[60%] md:pt-[8%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 rounded-l bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="textbox"
          ref={searchText}
          className="p-4 m-4 col-span-7 md:col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-5 md:col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg m-4"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

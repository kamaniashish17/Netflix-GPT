import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../MoviesList";

const GPTMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gptSearch);

  const { searchResults, gptSearchedMovies } = gpt;
  if (!searchResults) {
    return null;
    //Can show some Shimmer UI
  }

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {searchResults.map((movieName, index) => {
          return (
            <MoviesList
              key={movieName}
              title={movieName}
              movies={gptSearchedMovies[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;

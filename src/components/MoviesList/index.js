import React from "react";
import MovieCard from "../MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies", movies);
  return (
    <div>
      <div className="pt-2">
        <h1 className="text-3xl text-white font-bold py-2 px-2">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

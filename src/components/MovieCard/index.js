import React from "react";
import { IMAGE_URL_PATH } from "../../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <>
      {movie.poster_path && (
        <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 w-44 md:w-52 pr-4 rounded-lg ">
          <img alt={movie.title} src={IMAGE_URL_PATH + movie.poster_path} />
        </div>
      )}
    </>
  );
};

export default MovieCard;

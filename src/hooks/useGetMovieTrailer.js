import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVid = useSelector((store)=> store.movies.trailerVideo)
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json)

    const filteredTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredTrailers.length
      ? filteredTrailers[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVid && getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;

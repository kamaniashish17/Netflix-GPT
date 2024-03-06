import React from "react";
import MovieList from "../MoviesList";
import { useSelector } from "react-redux";
const MoviesListSection = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies &&
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20 pl-12">
          <MovieList
            movies={movies.nowPlayingMovies}
            title="Now Playing Movies"
          />
          <MovieList movies={movies.topRatedMovies} title="Top Rated Movies" />
          <MovieList movies={movies.popularMovies} title="Popular Movies" />
          <MovieList movies={movies.nowPlayingMovies} title="Upcoming Movies" />
        </div>
      </div>
    )
  );
};

export default MoviesListSection;

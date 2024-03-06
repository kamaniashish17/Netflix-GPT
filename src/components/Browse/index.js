import React from "react";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoSection from "../VideoSectionComponent";
import MoviesListSection from "../MoviesListSection";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  /**
   * Main Container
   *  - VideoBackground
   *  - Video Title
   *
   * Secondary Container
   *  - MovieList * n
   *  - Cards * n
   */
  return (
    <div className="relative">
      <div>
        <VideoSection />
        <MoviesListSection />
      </div>
    </div>
  );
};

export default Browse;

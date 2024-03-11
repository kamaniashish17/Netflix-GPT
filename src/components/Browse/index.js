import React, { useEffect } from "react";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoSection from "../VideoSectionComponent";
import MoviesListSection from "../MoviesListSection";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import SearchPage from "../../containers/SearchPage";
// import GPTSearch from "../GPTSearch";

const Browse = () => {
  const showGPTSearchView = useSelector(
    (store) => store.gptSearch.showGPTSearch
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="relative">
      <div>
        {showGPTSearchView ? (
          <SearchPage />
        ) : (
          <>
            <VideoSection />
            <MoviesListSection />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;

/**
 * Main Container
 *  - VideoBackground
 *  - Video Title
 *
 * Secondary Container
 *  - MovieList * n
 *  - Cards * n
 */

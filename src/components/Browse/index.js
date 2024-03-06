import React from "react";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoSection from "../VideoSectionComponent";
import MoviesRowSection from "../MovieRowsComponent";

const Browse = () => {
  useNowPlayingMovies();
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
        <MoviesRowSection />
      </div>
    </div>
  );
};

export default Browse;

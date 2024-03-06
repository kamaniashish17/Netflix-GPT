import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../VideoTitle";
import VideoBackground from "../VideoBackground";

const VideoSection = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(movies === null) return
  const mainMovie = movies[0]
  console.log(mainMovie)

  const {original_title, overview, id } = mainMovie
  return (
    <div>
      <div>
        <VideoTitle  title = {original_title} overview={overview}/>
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default VideoSection;
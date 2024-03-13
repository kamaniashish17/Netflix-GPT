import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>

      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white  text-black py-2 md:py-4 px-4 md:px-8 text-lg hover:bg-opacity-60 rounded-lg"> ▶️ Play</button>
        <button className="hidden md:inline-block bg-gray-300 text-black p-4 px-8 text-lg hover:bg-opacity-40  rounded-lg mx-2"> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;

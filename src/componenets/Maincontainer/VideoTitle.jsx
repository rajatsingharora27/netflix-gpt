import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36  px-12 border-2 border-yellow-300 border-solid flex flex-col justify-start">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-11/12 text-lg py-4 lg:w-1/2">{overview}</p>
      <div className="flex justify-start items-center gap-x-2">
        <button className="bg-white text-black text-lg font-bold px-10 p-4 flex items-center justify-center gap-x-2 bg-opacity-50 rounded-lg border-2 shadow-lg">
          <FaPlay /> <span>Play</span>
        </button>
        <button className="bg-gray-500 text-black text-lg font-bold px-8 p-4 flex items-center justify-center gap-x-2 bg-opacity-50 rounded-lg border-2 shadow-lg">
          <FaInfoCircle />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

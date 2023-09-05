import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black text-white w-screen aspect-video pt-[20%]  px-24 flex flex-col justify-start">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-11/12 text-lg py-4  lg:w-1/2 ">{overview}</p>
      <div className="flex justify-start items-center gap-x-2">
        <button className="bg-white text-black text-lg font-bold px-10 p-4 flex items-center justify-center gap-x-2 bg-opacity-50 rounded-lg border-2 shadow-lg hover:opacity-80">
          <FaPlay /> <span>Play</span>
        </button>
        <button className="bg-gray-500 text-white text-lg font-sm px-8 p-4 flex items-center justify-center gap-x-2 bg-opacity-50 rounded-lg border-2 shadow-lg hover:bg-slate-400">
          <FaInfoCircle />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../../hook/useMovieTrailer";

const VideoBackground = ({ id }) => {
  // console.log(id);
  const trailerVideoKey = useSelector((state) => state.movie?.trailerVideo);
  useMovieTrailer(id);

  // console.log(trailerVideoKey);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideoKey?.key}?si=X80qTrKoolI12edV`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

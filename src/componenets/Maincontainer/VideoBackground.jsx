import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants/apiConstants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../redux/slice/movieSlice";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const trailerVideoKey = useSelector((state) => state.movie?.trailerVideo);
  useEffect(() => {
    const getMovieVideo = async () => {
      //   console.log(`${process.env.REACT_APP_MOVIE_TRAILER}${id}/videos`);
      const movideData = await fetch(
        "https://api.themoviedb.org/3/movie/615656/videos",
        // `${process.env.REACT_APP_MOVIE_TRAILER}${id}/videos`,
        API_OPTIONS
      );
      const json = await movideData.json();
      const filterTriler = json.results.filter((videos) => {
        return videos.type === "Trailer";
      });

      const trailer =
        filterTriler.length !== 0 ? filterTriler[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
    getMovieVideo();
  }, []);
  console.log(trailerVideoKey);
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

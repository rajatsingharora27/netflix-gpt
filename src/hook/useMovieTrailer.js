import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants/apiConstants";
import { addTrailerVideo } from "../redux/slice/movieSlice";
import { useEffect } from "react";

// Fetch movie Trailer and update in redux store
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const movideData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
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
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;

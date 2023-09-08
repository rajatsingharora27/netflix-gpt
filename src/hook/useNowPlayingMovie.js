import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, URL } from "../utils/constants/apiConstants";
import { addNowPlayingMovies } from "../redux/slice/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = new useDispatch();
  const nowPlayingMovie = useSelector((store) => store.movie.nowPlayingMovies);
  useEffect(() => {
    const getMainPageList = async () => {
      // console.log(URL);
      const getData = await fetch(URL, API_OPTIONS);
      const json = await getData.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };

    getMainPageList();
  }, []);
};

export default useNowPlayingMovies;

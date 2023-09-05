import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  POPLUAR_MOVIE_URL,
} from "../utils/constants/apiConstants";
import { addNowPopularMovies } from "../redux/slice/movieSlice";

const usePopularMovies = () => {
  const dispatch = new useDispatch();
  useEffect(() => {
    const getMainPageList = async () => {
      // console.log(URL);
      const getData = await fetch(POPLUAR_MOVIE_URL, API_OPTIONS);
      const json = await getData.json();
      // console.log(POPLUAR_MOVIE_URL);
      // console.log(json.results, "popular");
      dispatch(addNowPopularMovies(json.results));
    };
    getMainPageList();
  }, []);
};

export default usePopularMovies;

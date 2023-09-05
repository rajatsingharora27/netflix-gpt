import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, URL } from "../utils/constants/apiConstants";
import { addNowPlayingMovies } from "../redux/slice/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = new useDispatch();
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

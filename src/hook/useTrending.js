import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TRENDING } from "../utils/constants/apiConstants";
import { addTrending } from "../redux/slice/movieSlice";

const useTrending = () => {
  const dispatch = new useDispatch();
  useEffect(() => {
    const getMainPageList = async () => {
      const getData = await fetch(TRENDING, API_OPTIONS);
      const json = await getData.json();
      dispatch(addTrending(json.results));
    };
    getMainPageList();
  }, []);
};

export default useTrending;

import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovie";
import Maincontainer from "./Maincontainer/Maincontainer";
import Secondarycontainer from "./Secondarycontainer/Secondarycontainer";
import usePopularMovies from "../hook/usePopluarMovies";
import useTrending from "../hook/useTrending";
import GptSearch from "./GptSearch/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptToggle = useSelector((state) => state.gptSearch.currentGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrending();

  return (
    <div>
      <Header />
      {gptToggle ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;

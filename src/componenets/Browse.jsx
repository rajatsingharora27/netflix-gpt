import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovie";
import Maincontainer from "./Maincontainer/Maincontainer";
import Secondarycontainer from "./Secondarycontainer/Secondarycontainer";
import usePopularMovies from "../hook/usePopluarMovies";
import useTrending from "../hook/useTrending";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrending();

  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;

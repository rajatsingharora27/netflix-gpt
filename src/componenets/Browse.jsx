import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovie";
import Maincontainer from "./Maincontainer/Maincontainer";
import Secondarycontainer from "./Secondarycontainer/Secondarycontainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;

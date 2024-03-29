import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies || movies === undefined) return;
  const mainMovies = movies[0];
  if (mainMovies === undefined || mainMovies === null) return;
  //   console.log(mainMovies);
  //   if (mainMovies !== undefined || mainMovies !== null) {
  //     const { original_title, overview, id } = mainMovies;
  //   }
  return (
    <div className="pt-[30%] bg-black  md:pt-0">
      <VideoTitle
        title={mainMovies?.original_title}
        overview={mainMovies?.overview}
      />
      <VideoBackground id={mainMovies?.id} />
    </div>
  );
};

export default Maincontainer;

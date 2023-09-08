import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const trending = useSelector((store) => store.movie?.trending);
  // console.log(popularMovies);
  return (
    <div className=" pl-2 bg-black ">
      <div className="mt-0   lg:-mt-56 lg:relative z-20">
        {" "}
        {Object.entries(movies).length !== 0 && (
          <MovieList title={"Now Playing"} movies={movies} />
        )}
        {Object.entries(trending).length !== 0 && (
          <MovieList title={"Trending"} movies={trending} />
        )}
        {Object.entries(popularMovies).length !== 0 && (
          <MovieList title={"Popular"} movies={popularMovies} />
        )}
      </div>
    </div>
  );
};

export default Secondarycontainer;

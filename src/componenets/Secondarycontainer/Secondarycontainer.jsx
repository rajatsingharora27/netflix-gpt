import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  console.log(movies);
  return (
    <div className="-mt-48 relative z-20 pl-2 bg-black ">
      {Object.entries(movies).length !== 0 && (
        <>
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"You May Like"} movies={movies} />
        </>
      )}
    </div>
  );
};

export default Secondarycontainer;

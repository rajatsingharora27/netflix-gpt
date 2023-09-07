import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Secondarycontainer/MovieList";

const DisplayGptSuggestion = () => {
  const gpt = useSelector((store) => store.gptSearch);
  const { gptMovies, movieNames } = gpt;

  if (!movieNames) return;
  //   console.log(gptMovies, movieNames);
  return (
    <div className="p-4 m-5 text-white bg-black">
      {movieNames.map((movie, id) => {
        return <MovieList key={movie} title={movie} movies={gptMovies[id]} />;
      })}
    </div>
  );
};

export default DisplayGptSuggestion;

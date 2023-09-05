import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  return (
    <div className="pt-7">
      <div className="overflow-hidden">
        <h1 className="text-3xl text-white   ">{title}</h1>
        <div className=" flex whitespace-nowrap  pt-4 overflow-auto scrollbar-hide">
          <div className="flex gap-x-7 ">
            {movies.map((movie) => {
              return (
                <MovieCard key={movies.id} posterPath={movie.poster_path} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

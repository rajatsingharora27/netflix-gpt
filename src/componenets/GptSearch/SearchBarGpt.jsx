import { Button, CircularProgress } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../utils/constants/languageGpt";
import { openai } from "../../utils/openAiUtils/openAI";
import { API_OPTIONS } from "../../utils/constants/apiConstants";
import {
  addErrorMessage,
  addGptMovieResult,
} from "../../redux/slice/gptSerach";
import { useNavigate } from "react-router-dom";

const SearchBarGpt = () => {
  const languageSelected = useSelector((state) => state.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const [serchText, setSearchText] = useState(null);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const getMovieDataFormTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchOpenAI = async () => {
    try {
      // console.log(showLoading);
      setShowLoading(true);
      // console.log(showLoading);
      //----------------Commented  this to prevent OPENAPI CALL------------------------//

      const messageString =
        "Act as a movie Recommendation system and suggest some movies fro the query : " +
        serchText +
        ". only give me names of 5 movies, comma seperated like the exple result given ahead. Example Result : koi mill gya , andaz apna apna , hero ,don,jawan";
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: messageString }],
        model: "gpt-3.5-turbo",
      });
      const recomennedMovieList =
        gptResult.choices[0]?.message?.content.split(",");

      const moviePromise = recomennedMovieList.map((movie) => {
        return getMovieDataFormTMDB(movie);
      });

      // -------------------------------------UNCOMMENT WHEN NESSARY------------------------------------

      // const moviePromise = [
      //   "Andaz Apna Apna",
      //   " Chupke Chupke",
      //   " Gol Maal",
      //   " Amar Akbar Anthony",
      //   " Padosan",
      // ].map((movie) => {
      //   return getMovieDataFormTMDB(movie);
      // });
      // const recomennedMovieList = [];
      const movieList = await Promise.all(moviePromise);
      setShowLoading(false);
      console.log(showLoading);
      dispatch(
        addGptMovieResult({
          movieNames: recomennedMovieList,
          movieResults: movieList,
        })
      );
      console.log(movieList);
    } catch (error) {
      dispatch(addErrorMessage(error.message));
      navigate("/error");
      // console.log(error.message);
    }
  };

  return (
    <div className="pt-[35%] flex justify-center items-center  md:pt-[10%] ">
      <form
        className="w-full  grid grid-cols-12 bg-black  rounded-lg md:w-1/2 md:mt-[0px] "
        onSubmit={(e) => e.preventDefault}
      >
        <input
          type="text"
          placeholder={lang[languageSelected]?.placeHolderSearch}
          className="p-4 m-4 col-span-9"
          // ref={searchText}
          onChange={handleInput}
        />
        <Button
          className={`col-span-3 text-white m-4 font-semibold ${
            !serchText ? "bg-gray-800" : "bg-red-700"
          } flex gap-x-3 `}
          disabled={!serchText ? true : false}
          onClick={handleSearchOpenAI}
        >
          {showLoading && <CircularProgress className="text-black " />}
          <h2>{lang[languageSelected].search}</h2>
        </Button>
      </form>
    </div>
  );
};

export default SearchBarGpt;

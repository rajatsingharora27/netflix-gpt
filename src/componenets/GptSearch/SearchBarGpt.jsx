import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../../utils/constants/languageGpt";

const SearchBarGpt = () => {
  const languageSelected = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 grid grid-cols-12 bg-black  rounded-lg ">
        <input
          type="text"
          placeholder={lang[languageSelected]?.placeHolderSearch}
          className="p-4 m-4 col-span-9"
        />
        <Button className="col-span-3 text-white m-4 font-semibold bg-red-700">
          {lang[languageSelected].search}
        </Button>
      </form>
    </div>
  );
};

export default SearchBarGpt;

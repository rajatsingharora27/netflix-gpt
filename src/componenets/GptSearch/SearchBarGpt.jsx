import { Button } from "@mui/material";
import React from "react";
import { imageConstants } from "../../utils/constants/imageConstant";

const SearchBarGpt = () => {
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 grid grid-cols-12 bg-black  rounded-lg ">
        <input
          type="text"
          placeholder="What do you want to watch today ? "
          className="p-4 m-4 col-span-9"
        />
        <Button className="col-span-3 text-white m-4 font-semibold bg-red-700">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBarGpt;

import React from "react";
import SearchBarGpt from "./SearchBarGpt";
import { imageConstants } from "../../utils/constants/imageConstant";
import DisplayGptSuggestion from "./DisplayGptSuggestion";

const GptSearch = () => {
  return (
    <div className="">
      {/* bg-gradient-to-r from-gray-800 to-gray-900 w-full h-full rounded-lg shadow-2xl" */}
      <img
        src={imageConstants.backgroundImage}
        alt="Logo"
        className="fixed w-[100vw] max-h-max bg-image-gradient-315deg from-violet-500 to-fuchsia-500 -z-10 "
      />

      <SearchBarGpt />
      <DisplayGptSuggestion />
    </div>
  );
};

export default GptSearch;

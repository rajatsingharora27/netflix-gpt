import React from "react";
import SearchBarGpt from "./SearchBarGpt";
import { imageConstants } from "../../utils/constants/imageConstant";
import DisplayGptSuggestion from "./DisplayGptSuggestion";

const GptSearch = () => {
  return (
    <>
      <img
        src={imageConstants.backgroundImage}
        alt="Logo"
        className="fixed w-screen h-screen object-cover bg-image-gradient-315deg from-violet-500 to-fuchsia-500 -z-10 "
      />
      <div className="">
        {/* bg-gradient-to-r from-gray-800 to-gray-900 w-full h-full rounded-lg shadow-2xl" */}

        <SearchBarGpt />
        <DisplayGptSuggestion />
      </div>
    </>
  );
};

export default GptSearch;

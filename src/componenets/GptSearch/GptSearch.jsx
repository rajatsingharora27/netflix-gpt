import React from "react";
import SearchBarGpt from "./SearchBarGpt";
import { imageConstants } from "../../utils/constants/imageConstant";

const GptSearch = () => {
  return (
    <div>
      <img
        src={imageConstants.backgroundImage}
        alt="Logo"
        className="absolute w-[100vw] max-h-max bg-image-gradient-315deg from-violet-500 to-fuchsia-500 -z-10 "
      />

      <SearchBarGpt />
    </div>
  );
};

export default GptSearch;

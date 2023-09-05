import React from "react";
import { imageConstants } from "../../utils/constants/imageConstant";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  //   /FQHtuf2zc8suMFE28RyvFt3FJN.jpg
  return (
    <div className="w-56">
      <img
        alt="Now playing movie"
        src={imageConstants.imageCDNbasePath + posterPath}
      />
    </div>
  );
};

export default MovieCard;

export const URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc";
export const POPLUAR_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TRENDING =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
// console.log(URL);
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
};

export const OPENAI_API_KEY = process.env.REACT_APP_OPEN_API_KEY;

//

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

// REACT_APP_MOVIE_TRAILER = "https://api.themoviedb.org/3/movie/";

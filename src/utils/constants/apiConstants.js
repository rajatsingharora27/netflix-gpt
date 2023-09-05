export const URL = process.env.REACT_APP_MOVIE_LIST_URL;
export const POPLUAR_MOVIE_URL = process.env.REACT_APP_POPULAR_MOVIE;
export const TRENDING = process.env.REACT_APP_TENDING;
// console.log(URL);
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
};

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

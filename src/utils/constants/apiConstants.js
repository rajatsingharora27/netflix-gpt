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
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDIxNDU1ODJiN2IwYmU2YzQwYTg0NmMzYWNiMDQxZSIsInN1YiI6IjYyNzY2YjhmOTU2NjU4MTFlYTdlNmNlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0W0qZaV-VBVuAwtMPCqy-ldZl19uL_zmha-ZiDRbj6g",
  },
};

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

// REACT_APP_MOVIE_TRAILER = "https://api.themoviedb.org/3/movie/";

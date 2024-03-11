const key = process.env.REACT_APP_TMDB_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ko-KR&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=ko-KR`,
  requestSf: `https://api.themoviedb.org/3/movie?api_key=${key}&language=ko-KR&query=sf&page=1&include_adult=true`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ko-KR&page=1`,
};

export default requests;

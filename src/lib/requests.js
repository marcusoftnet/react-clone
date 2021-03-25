const API_KEY = '6759f81fb01621389094ee5ebc8343ed';

const requestURLs = {
  trendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requestURLs;

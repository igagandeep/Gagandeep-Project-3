const API_KEY = process.env.REACT_APP_API_KEY;
const similarMoviesUrl = (movieId) => {
  const genres = [
    {
      title: "Similar Movies",
      fetchUrl: `/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
      title: "Recommended Movies",
      fetchUrl: `/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US`,
    },
    {
      title: "Popular Movies",
      fetchUrl: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
      title: "Top Rated Movies",
      fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
  ];
  return genres;
};

export default similarMoviesUrl;

const API_KEY = process.env.REACT_APP_API_KEY;
const allMoviesUrl = () => {
  const genres = [
    {
      title: "Netflix Original",
      fetchUrl: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    },
    {
      title: "Trending",
      fetchUrl: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    },
    {
      title: "Top Rated",
      fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
      title: "Action Movies",
      fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
      title: "Comedy Movies",
      fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
      title: "Horror Movies",

      fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
      title: "Romance Movies",

      fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
      title: "Documentaries",

      fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
  ];
  return genres;
};

export default allMoviesUrl;

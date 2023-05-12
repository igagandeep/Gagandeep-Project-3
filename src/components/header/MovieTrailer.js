import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "./Header.css";

const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          }
        );
        const videos = res.data.results;
        const trailerVideos = videos.filter(
          (video) => video.type === "Trailer"
        );
        if (trailerVideos.length > 0) {
          const { key } = trailerVideos[0];
          setTrailer(key);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieTrailer();
  }, [movieId]);
  return (
    <ReactPlayer
      className="react-player"
      url={`https://www.youtube.com/watch?v=${trailer}`}
      controls
      width="100%"
      height="88%"
    />
  );
};

export default MovieTrailer;

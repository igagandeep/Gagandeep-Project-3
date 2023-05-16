import { useState } from "react";
import ReactModal from "react-modal";
import MovieTrailer from "./MovieTrailer";

function Banner({ movie }) {
  const [isModalOpen, setIsOpenModal] = useState(false);

  // to restrict the size of movie overview to 120 characters
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      className="banner"
      style={
        movie.backdrop_path && {
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }
      }
    >
      <div className="wrapper">
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie.name || movie.original_name || movie.original_title}
          </h1>
          <div className="banner-btns">
            <button type="button" className="banner-btn" onClick={openModal}>
              Play
            </button>
            <button className="banner-btn">My List</button>

            <ReactModal
              className="custom-modal"
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
            >
              <button className="close-modal" onClick={closeModal}>
                ❌
              </button>
              <MovieTrailer movieId={movie.id} />
            </ReactModal>
          </div>
          <h3 className="banner-description">
            {truncate(`${movie.overview}`, 120)}
          </h3>
        </div>
      </div>
      <div className="banner-fadeEffect"></div>
    </div>
  );
}

export default Banner;

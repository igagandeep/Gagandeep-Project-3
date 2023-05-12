function Banner({ movie }) {
  // to restrict the size of movie overview to 120 characters
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="wrapper">
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie.name || movie.original_name || movie.original_title}
          </h1>
          <div className="banner-btns">
            <button className="banner-btn">Play</button>
            <button className="banner-btn">My List</button>
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

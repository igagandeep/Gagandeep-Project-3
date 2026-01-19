import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Movie from "./Movie";
import ErrorComponent from "../error/ErrorComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get(fetchUrl);
                setMovies(res.data.results);
                setError(false);
            } catch (error) {
                setError(true);
            }
        };

        fetchMovies();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            partialVisibilityGutter: 40,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
        },
    };

    return (
        <>
            {!error ? (
                <section className="movies-container">
                    <div className="movies-wrapper">
                        <h2 className="title">{title}</h2>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            keyBoardControl={true}
                            partialVisible={true}
                            customTransition="all 1s ease"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["mobile"]}
                            arrows={true}
                            className="movies"
                        >
                            {movies.map((movie) => {
                                return (
                                    movie.backdrop_path && (
                                        <Movie
                                            key={movie.id}
                                            movieId={movie.id}
                                            movieName={movie.name}
                                            movieImg={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                        />
                                    )
                                );
                            })}
                        </Carousel>
                    </div>
                </section>
            ) : (
                <ErrorComponent />
            )}
        </>
    );
};

export default Row;

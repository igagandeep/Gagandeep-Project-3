import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Loader from "./components/loader/Loader";
import useMovieContext from "./context/useMovieContext";

function App() {
  const { loading } = useMovieContext();
  const [showLoader, setShowLoader] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minTimeElapsed && !loading && !initialLoadComplete) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        setInitialLoadComplete(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [minTimeElapsed, loading, initialLoadComplete]);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      )}
    </>
  );
}

export default App;

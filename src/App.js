import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/index.css";
import axios from "axios";
// import components
import MainNav from "./components/MainNav";
// import pages
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import Detail from "./pages/Detail";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
// import styled-components
import { BackBtn } from "./styled/BackBtn";

function App() {
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

  const fetchMoviesByCategory = async (category) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjA3NzQwZWEwNTUwYWVjZTlkN2FlMWQ3ZTZkOTdmMSIsInN1YiI6IjYzNzYyNWZlZmFiM2ZhMDBiNGQwMjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dlcoYN-oeHl-AYBDulcwGEaa0ljJt-Bxp3RUXKhHvXY",
      },
    };
    const moviesData = [];
    for (let page = 1; page <= 5; page++) {
      const moviesURL = `https://api.themoviedb.org/3/movie/${category}?language=ko&page=${page}&region=kr`;
      const moviesResponse = await axios.get(moviesURL, options);
      const pageData = moviesResponse.data.results;
      moviesData.push(...pageData);
    }
    return moviesData;
  };

  const fetchData = async () => {
    // Fetch now playing movies
    const nowPlayingData = await fetchMoviesByCategory("now_playing");
    setNowplayingMovies(nowPlayingData);

    // Fetch popular movies
    const popularMoviesData = await fetchMoviesByCategory("popular");
    setPopularMovies(popularMoviesData);

    // Fetch top-rated movies
    const topRatedMoviesData = await fetchMoviesByCategory("top_rated");
    setTopRatedMovies(topRatedMoviesData);

    // Fetch up-coming movies
    const upComingMoviesData = await fetchMoviesByCategory("upcoming");
    setUpComingMovies(upComingMoviesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="main_container">
      <BackBtn
        onClick={() => {
          navigate(-1);
        }}
      />
      <MainNav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              nowplayingMovies={nowplayingMovies}
              popularMovies={popularMovies}
              topRatedMovies={topRatedMovies}
              upComingMovies={upComingMovies}
            />
          }
        />
        <Route
          path="/now-playing"
          element={<NowPlaying nowplayingMovies={nowplayingMovies} />}
        />
        <Route
          path="/popular"
          element={<Popular popularMovies={popularMovies} />}
        />
        <Route
          path="/top-rated"
          element={<TopRated topRatedMovies={topRatedMovies} />}
        />
        <Route
          path="/up-coming"
          element={<UpComing upComingMovies={upComingMovies} />}
        />
        <Route
          path="/detail/:id"
          element={
            <Detail
              nowplayingMovies={nowplayingMovies}
              popularMovies={popularMovies}
              topRatedMovies={topRatedMovies}
              upComingMovies={upComingMovies}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

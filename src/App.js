import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
// import react-icons
import { FaReply } from "react-icons/fa";

const BackBtn = styled(FaReply)`
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  color: #ee1d52;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s all ease-in;
  &:hover {
    transform: rotate(360deg);
  }
  z-index: 999;
  @media screen and (max-width: 413px) {
    left: 7.5%;
  }
`;

function App() {
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjA3NzQwZWEwNTUwYWVjZTlkN2FlMWQ3ZTZkOTdmMSIsInN1YiI6IjYzNzYyNWZlZmFiM2ZhMDBiNGQwMjM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dlcoYN-oeHl-AYBDulcwGEaa0ljJt-Bxp3RUXKhHvXY",
      },
    };

    // Fetch now playing movies
    const nowPlayingData = [];
    for (let page = 1; page <= 5; page++) {
      const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}&region=kr`;
      const nowPlayingResponse = await axios.get(nowPlayingURL, options);
      const pageData = nowPlayingResponse.data.results;
      nowPlayingData.push(...pageData);
    }
    setNowplayingMovies(nowPlayingData);

    // Fetch popular movies
    const popularMoviesData = [];
    for (let page = 1; page <= 5; page++) {
      const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}&region=kr`;
      const popularMoviesResponse = await axios.get(popularMoviesURL, options);
      const pageData = popularMoviesResponse.data.results;
      popularMoviesData.push(...pageData);
    }
    setPopularMovies(popularMoviesData);

    // Fetch top-rated movies
    const topRatedMoviesData = [];
    for (let page = 1; page <= 5; page++) {
      const topRatedMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?language=ko&page=${page}&region=kr`;
      const topRatedMoviesResponse = await axios.get(
        topRatedMoviesURL,
        options
      );
      const pageData = topRatedMoviesResponse.data.results;
      topRatedMoviesData.push(...pageData);
    }
    setTopRatedMovies(topRatedMoviesData);

    // Fetch up-coming movies
    const upComingMoviesData = [];
    for (let page = 1; page <= 5; page++) {
      const upComingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?language=ko&page=${page}&region=kr`;
      const upComingMoviesResponse = await axios.get(
        upComingMoviesURL,
        options
      );
      const pageData = upComingMoviesResponse.data.results;
      upComingMoviesData.push(...pageData);
    }
    setUpComingMovies(upComingMoviesData);
  };

  const navigate = useNavigate();

  return (
    <div className="main_container">
      <BackBtn
        onClick={() => {
          navigate("./../");
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

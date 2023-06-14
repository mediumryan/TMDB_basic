import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard, MovieCardImg } from "../styled/StyledMovieCard";
import { HomeMovieDescription } from "../styled/HomeMovieDescription";

export default function HomeCard({ item, homeOtherData, i }) {
  const getHomeImg = () => {
    if (item) {
      return `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    }
  };
  const navigate = useNavigate();
  return (
    <MovieCard
      onClick={() => {
        navigate(`/${homeOtherData[i].moveTo}`);
      }}
    >
      <MovieCardImg src={getHomeImg()} />
      <HomeMovieDescription>
        <span>{homeOtherData[i].title}</span>
      </HomeMovieDescription>
    </MovieCard>
  );
}

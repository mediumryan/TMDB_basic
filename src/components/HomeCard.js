import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard, MovieCardImg, MovieDescription } from "./NowPlayingCard";

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
      <MovieDescription>
        <span>{homeOtherData[i].title}</span>
      </MovieDescription>
    </MovieCard>
  );
}

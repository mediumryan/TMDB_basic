import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard, MovieCardImg, MovieDescription } from "./NowPlayingCard";

export default function PopularCard({ item }) {
  const img_path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

  const navigate = useNavigate();

  return (
    <MovieCard
      onClick={() => {
        navigate(`./../detail/${item.title}`);
      }}
    >
      <MovieCardImg src={img_path} />
      <MovieDescription>
        <span>{item.title}</span>
      </MovieDescription>
    </MovieCard>
  );
}

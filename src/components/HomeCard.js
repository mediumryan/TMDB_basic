import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MovieCard, MovieCardImg, MovieDescription } from "./NowPlayingCard";

const HomeMovieDescription = styled(MovieDescription)`
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.7);
`;

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

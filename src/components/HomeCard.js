import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieCardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const MovieDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff607e;
  background-color: #333333;
  cursor: pointer;
  opacity: 0;
  transition: 300ms opacity ease-in;
  &:hover {
    opacity: 0.75;
  }
  span {
    font-size: 28px;
    margin: 0 12px;
  }
`;

export default function HomeCard({ item }) {
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

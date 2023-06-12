import React from "react";
import styled from "styled-components";
import HomeCard from "../components/HomeCard";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(240px, auto);
  grid-gap: 16px;
`;

export default function Home({
  nowplayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
}) {
  const homeData = [
    nowplayingMovies[0],
    popularMovies[0],
    topRatedMovies[0],
    upComingMovies[0],
  ];

  return;
  <HomeContainer>
    {homeData.map((item) => {
      return <HomeCard />;
    })}
  </HomeContainer>;
}

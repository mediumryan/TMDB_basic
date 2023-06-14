import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeCard from "../components/HomeCard";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-auto-rows: minmax(360px, auto);
  grid-gap: 8px;
  justify-content: center;
  @media screen and (max-width: 413px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = ({
  nowplayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
}) => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const extractedData = [
      nowplayingMovies[0],
      popularMovies[1],
      topRatedMovies[0],
      upComingMovies[1],
    ];
    setHomeData(extractedData);
  }, [nowplayingMovies, popularMovies, topRatedMovies, upComingMovies]);

  const [homeOtherData] = useState([
    {
      title: "상영중",
      moveTo: "now-playing",
    },
    {
      title: "인기영화",
      moveTo: "popular",
    },
    {
      title: "평점순",
      moveTo: "top-rated",
    },
    {
      title: "개봉예정",
      moveTo: "up-coming",
    },
  ]);

  return (
    <HomeContainer>
      {homeData.map((item, index) => {
        return (
          <HomeCard
            item={item}
            key={index}
            i={index}
            homeOtherData={homeOtherData}
          />
        );
      })}
    </HomeContainer>
  );
};

export default Home;

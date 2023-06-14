import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import { HomeContainer } from "../styled/HomeContainer";
import { homeOtherData } from "../datas/homeOtherData";

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
  }, [
    nowplayingMovies[0],
    popularMovies[1],
    topRatedMovies[0],
    upComingMovies[1],
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

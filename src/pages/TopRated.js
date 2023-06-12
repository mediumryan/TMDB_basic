import React from "react";
import styled from "styled-components";
import PopularCard from "../components/NowPlayingCard";
import { PageContainer } from "./NowPlaying";

export default function TopRated({ topRatedMovies }) {
  return (
    <PageContainer>
      {topRatedMovies.map((item) => {
        return <PopularCard key={item.id} item={item} />;
      })}
    </PageContainer>
  );
}

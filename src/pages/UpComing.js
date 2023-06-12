import React from "react";
import styled from "styled-components";
import NowPlayingCard from "../components/NowPlayingCard";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(240px, auto);
  grid-gap: 8px;
`;

export default function UpComing({ upComingMovies }) {
  return (
    <PageContainer>
      {upComingMovies.map((item) => {
        return <NowPlayingCard key={item.id} item={item} />;
      })}
    </PageContainer>
  );
}
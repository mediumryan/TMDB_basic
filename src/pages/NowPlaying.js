import React from "react";
import { PageContainer } from "../styled/PageContainer";
import NowPlayingCard from "../components/NowPlayingCard";

export default function NowPlaying({ nowplayingMovies }) {
  return (
    <PageContainer>
      {nowplayingMovies.map((item) => {
        return <NowPlayingCard key={item.id} item={item} />;
      })}
    </PageContainer>
  );
}

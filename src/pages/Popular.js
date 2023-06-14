import React from "react";
import PopularCard from "../components/NowPlayingCard";
import { PageContainer } from "../styled/PageContainer";

export default function NowPlaying({ popularMovies }) {
  return (
    <PageContainer>
      {popularMovies.map((item) => {
        return <PopularCard key={item.id} item={item} />;
      })}
    </PageContainer>
  );
}

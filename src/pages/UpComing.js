import React from "react";
import NowPlayingCard from "../components/NowPlayingCard";
import { PageContainer } from "../styled/PageContainer";

export default function UpComing({ upComingMovies }) {
  return (
    <PageContainer>
      {upComingMovies.map((item) => {
        return <NowPlayingCard key={item.id} item={item} />;
      })}
    </PageContainer>
  );
}

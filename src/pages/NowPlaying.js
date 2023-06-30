import React from "react";
import { PageContainer } from "../styled/PageContainer";
import NowPlayingCard from "../components/NowPlayingCard";

export default function NowPlaying({ nowplayingMovies, inputVal }) {
  return (
    <>
      <PageContainer>
        {nowplayingMovies
          .filter((i) => {
            return inputVal.trim() === ""
              ? i
              : i.title.trim().includes(inputVal);
          })
          .map((item) => {
            return <NowPlayingCard key={item.id} item={item} />;
          })}
      </PageContainer>
    </>
  );
}

import React from "react";
import { PageContainer } from "../styled/PageContainer";
import NowPlayingCard from "../components/NowPlayingCard";

export default function NowPlaying({ nowplayingMovies, inputVal }) {
  console.log(nowplayingMovies);

  return (
    <>
      <PageContainer>
        {nowplayingMovies
          .filter((i) => {
            return inputVal.trim().toLowerCase() === ""
              ? i
              : i.title.trim().toLowerCase().includes(inputVal);
          })
          .map((item) => {
            return <NowPlayingCard key={item.id} item={item} />;
          })}
      </PageContainer>
    </>
  );
}

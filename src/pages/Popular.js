import React from "react";
import PopularCard from "../components/NowPlayingCard";
import { PageContainer } from "../styled/PageContainer";

export default function NowPlaying({ popularMovies, inputVal }) {
  return (
    <>
      <PageContainer>
        {popularMovies
          .filter((i) => {
            return inputVal.trim() === ""
              ? i
              : i.title.trim().includes(inputVal);
          })
          .map((item) => {
            return <PopularCard key={item.id} item={item} />;
          })}
      </PageContainer>
    </>
  );
}

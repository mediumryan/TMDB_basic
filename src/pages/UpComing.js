import React from "react";
import NowPlayingCard from "../components/NowPlayingCard";
import { PageContainer } from "../styled/PageContainer";

export default function UpComing({ upComingMovies, inputVal }) {
  return (
    <>
      <PageContainer>
        {upComingMovies
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

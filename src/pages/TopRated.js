import React from "react";
import PopularCard from "../components/NowPlayingCard";
import { PageContainer } from "../styled/PageContainer";

export default function TopRated({ topRatedMovies, inputVal }) {
  return (
    <>
      <PageContainer>
        {topRatedMovies
          .filter((i) => {
            return inputVal.trim().toLowerCase() === ""
              ? i
              : i.title.trim().toLowerCase().includes(inputVal);
          })
          .map((item) => {
            return <PopularCard key={item.id} item={item} />;
          })}
      </PageContainer>
    </>
  );
}

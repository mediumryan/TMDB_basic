import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { genres } from "./../datas/genres";
import {
  DetailContainer,
  DetailCard,
  DetailImg,
  DetailDescription,
  DetailStory,
} from "../styled/StyledDetail";
import { CircularProgress } from "@mui/material";

export default function Detail({
  nowplayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
}) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);

  const nowPlayingFound = nowplayingMovies.find((a) => a.title === id);
  const popularFound = popularMovies.find((a) => a.title === id);
  const topRatedFound = topRatedMovies.find((a) => a.title === id);
  const upCommingFound = upComingMovies.find((a) => a.title === id);

  function getDetailData() {
    if (nowPlayingFound !== undefined) {
      setDetailData(nowPlayingFound);
    } else if (popularFound !== undefined) {
      setDetailData(popularFound);
    } else if (topRatedFound !== undefined) {
      setDetailData(topRatedFound);
    } else if (upCommingFound !== undefined) {
      setDetailData(upCommingFound);
    } else {
      return;
    }
  }

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailImg = () => {
    if (detailData) {
      return `https://image.tmdb.org/t/p/w500/${detailData.poster_path}`;
    }
  };

  const getGenresString = () => {
    if (detailData && detailData.genre_ids) {
      const genreNames = detailData?.genre_ids?.map(
        (genreId) =>
          genres.genres.find((genre) => genre.id === genreId)?.name || ""
      );
      return genreNames.join(", ");
    }
    return "";
  };

  return (
    <DetailContainer>
      <DetailCard>
        <DetailImg src={getDetailImg()} alt="영화 포스터입니다." />
        <DetailDescription>
          {detailData ? (
            <>
              <p>{detailData.title}</p>
              <p>원제 : {detailData.original_title}</p>
              <p>평점 : {detailData.vote_average}</p>
              <p>장르 : {getGenresString()}</p>
              <p>청불 : {detailData.adult === true ? "O" : "X"}</p>
              <DetailStory>
                <p>스토리</p>
                <p>
                  {detailData === undefined ? "Loading" : detailData.overview}
                </p>
              </DetailStory>
              ;
            </>
          ) : (
            <p>
              <CircularProgress />
            </p>
          )}
        </DetailDescription>
      </DetailCard>
    </DetailContainer>
  );
}

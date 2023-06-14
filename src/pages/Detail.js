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
      const genreNames = detailData.genre_ids.map((genreId) => {
        const genre = genres.genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
      });
      return genreNames.join(", ");
    }
    return "";
  };

  console.log(detailData);

  return (
    <DetailContainer>
      <DetailCard>
        <DetailImg src={getDetailImg()} alt="영화 포스터입니다." />
        <DetailDescription>
          <p>{detailData === undefined ? "Loading" : detailData.title}</p>
          <p>
            원제 :{" "}
            {detailData === undefined ? "Loading" : detailData.original_title}
          </p>
          <p>장르 : {getGenresString()}</p>
          <p>
            평점 :{" "}
            {detailData === undefined ? "Loading" : detailData.vote_average}
          </p>
          <p>
            청불 :{" "}
            {detailData === undefined
              ? "Loading"
              : detailData.adult === true
              ? "O"
              : "X"}
          </p>
          <DetailStory>
            <p>스토리</p>
            <p>{detailData === undefined ? "Loading" : detailData.overview}</p>
          </DetailStory>
        </DetailDescription>
      </DetailCard>
    </DetailContainer>
  );
}

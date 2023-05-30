import styled from 'styled-components';
import { useState } from 'react';
import {genreData} from './../Datas/genreData';

const DetailCardContainer = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  border-radius : 12px;
  margin : 24px 15rem;
`

const DetailImg = styled.img`
  position : absolute;
  width : 100%;
  height :100%;
  border-radius : 12px;
  opacity : .2;
`

const DetailContents = styled.div`
  position : absolute;
  width : 100%;
  height :100%;
  border-radius : 12px;
  display : flex;
  flex-direction : column;
  z-index : 999;
  color : #fff;
`

const DetailTitle = styled.p`
  width : 75%;
  overflow-x : auto;
  line-height : 1.5;
  font-size : 36px;
  padding : 72px 28px 0 28px;
  margin : 0 auto;
  color : #8B5FBF;
`

const DetailContentsInfo = styled.p`
  font-size : 18px;
  margin-top : 36px;
  padding-left : 64px;
`

const DetailStory = styled.p`
  max-height : 45%;
  overflow-y : scroll;
  font-size : 18px;
  margin-top : 72px;
  padding : 0 64px;
  line-height : 1.7;
`

const DetailCard = ({ detailData }) => {

  // 장르값 변환
  const genres = genreData.genres;
  let foundGenres = [];
  if(detailData) {
    foundGenres = detailData.genre_ids.map((id) => {
      const genre = genres.find((a) => a.id === id);
      return genre ? genre.name : "";
    })
  }

  console.log(foundGenres)
 

  function getImagePath() {
    if(detailData) {
      return `https://image.tmdb.org/t/p/w500/${detailData.poster_path}`;
    }
  };

  function getAdultInfo() {
    if(detailData) {
      if(detailData.adult == true) {
        return 'O';
      } else {
        return 'X';
      }
    }
  }
    
  return(
    <DetailCardContainer>
      <DetailImg src={getImagePath()}/>
      <DetailContents>
        <DetailTitle>{detailData&&detailData.title}</DetailTitle>
        <DetailContentsInfo>
          원제 : {detailData&&detailData.original_title}
        </DetailContentsInfo>
        <DetailContentsInfo>
          장르 : {foundGenres.slice(0,3).join(', ')}
        </DetailContentsInfo>
        <DetailContentsInfo>
          평점 : {detailData&&detailData.vote_average}&nbsp;({detailData&&detailData.vote_count} 참여)
        </DetailContentsInfo>
        <DetailContentsInfo>
          청불 : {getAdultInfo()}
        </DetailContentsInfo>
        <DetailContentsInfo>
          개봉 : {detailData&&detailData.release_date}
        </DetailContentsInfo>
        <DetailStory>
          {detailData&&detailData.overview}
        </DetailStory>
      </DetailContents>
    </DetailCardContainer>
  )
}

export default DetailCard;
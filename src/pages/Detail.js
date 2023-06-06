import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const DetailContainer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

const DetailCard = styled.div`
    background-color: #000;
    position: relative;
    width: 100%;
    height : 780px;
`

const DetailImg = styled.img`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
`

const DetailDescription = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    color : #ff607e;
    background-color: rgba(247,247,247, 0.35);
    display : flex;
    flex-direction: column;
    padding : 12px 24px;
`

export default function Detail({nowplaying}) {

const {id} = useParams();
const [detailData] = useState(nowplaying.find((a) => a.title === id));

const getDetailImg = () => {
    if(detailData) {
        return `https://image.tmdb.org/t/p/w500/${detailData.poster_path}`
    }
}

  return (
    <DetailContainer>
        <DetailCard>
            <DetailImg src={getDetailImg()} alt='영화 포스터입니다.'/>
            <DetailDescription>
                <h2>{detailData === undefined ? 'Loading' : detailData.title}</h2>
                <h4>원제 : {detailData === undefined ? 'Loading' : detailData.original_title}</h4>
            </DetailDescription>
        </DetailCard>
    </DetailContainer>
  )
}

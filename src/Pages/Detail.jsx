import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import components
import DetailCard from './../Components/DetailCard';


const DetailContainer = styled.div`
  background-color : #000;
  height : 100vh;
  padding : 12px 0;
  display : flex;
  justify-content : center;
  align-items : center;
`

const Detail = ({nowPlaying,popular,topRated,upComming}) => {

  const { id } = useParams();

  const [detailData,setDetailData] = useState();

  const nowPlayingFound = nowPlaying.find((a) => a.title == id);
  const popularFound = popular.find((a) => a.title == id);
  const topRatedFound = topRated.find((a) => a.title == id);
  const upCommingFound = upComming.find((a) => a.title == id);
  
  function getDetailData() {
    if( nowPlayingFound !== undefined ) {
      setDetailData(nowPlayingFound);
    } else if( popularFound !== undefined ) {
      setDetailData(popularFound);
    } else if( topRatedFound !== undefined ) {
      setDetailData(topRatedFound);
    } else if( upCommingFound !== undefined ) {
      setDetailDatag(upCommingFound);
    } else {
      return;
    };
  }

  useEffect(() => {
    getDetailData();
  },[])  
  
  return(
    <DetailContainer>
      <DetailCard detailData={detailData}/>
    </DetailContainer>
  )
}

export default Detail;
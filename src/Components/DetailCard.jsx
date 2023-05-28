import styled from 'styled-components';

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
  opacity : .4;
`

const DetailContents = styled.div`
  position : absolute;
  width : 100%;
  height :100%;
  border-radius : 12px;
  display : flex;
  justify-content : center;
  align-items : center;
  z-index : 999;
  color : #fff;
`



const DetailCard = ({ detailData }) => {

  console.log(detailData)

  function getImagePath() {
    if(detailData) {
      return `https://image.tmdb.org/t/p/w500/${detailData.poster_path}`;
    }
  };
    
  return(
    <DetailCardContainer>
      <DetailImg src={getImagePath()}/>
      <DetailContents>
        <p>{detailData&&detailData.title}</p>
        <p>{detailData&&detailData.original_title}</p>
        <p>{detailData&&detailData.genres}</p>
        <p>{detailData&&detailData.adult}</p>
      </DetailContents>
    </DetailCardContainer>
  )
}

export default DetailCard;
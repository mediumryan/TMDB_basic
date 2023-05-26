import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeItem = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  border-radius : 8px;
`

const HomeItemImg = styled.img`
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 100%;
  cursor : pointer;
  border-radius : 8px;
  &:hover {
    opacity : 0.2;
  }
  transition : 300ms opacity ease-in;
`

const HomeTitle = styled.p`
  color : #fff;
  font-size : 36px;
`

const HomeItems = ({homeData, homeOtherData, i}) => {

  const image_path = `https://image.tmdb.org/t/p/w500/${homeData[i].poster_path}`;

  const navigate = useNavigate();
  
  return(
    <HomeItem>
      <HomeTitle>{homeOtherData[i].title}</HomeTitle>
      <HomeItemImg 
        src={image_path} 
        alt='영화 포스터 입니다.'
        onClick={()=>{navigate(`./../${homeOtherData[i].movoTo}`)}}/>
    </HomeItem>
  )
}

export default HomeItems;
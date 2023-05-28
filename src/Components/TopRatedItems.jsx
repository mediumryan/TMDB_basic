import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TopRatedItem = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  border-radius : 8px;
`

const TopRatedItemImg = styled.img`
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

const TopRatedTitle = styled.p`
  color : #fff;
  font-size : 18px;
  padding : 0 12px;
`

const TopRatedItems = ({topRated, i}) => {

  const image_path = `https://image.tmdb.org/t/p/w500/${topRated[i].poster_path}`;

  const navigate = useNavigate();
  
  return(
    <TopRatedItem onClick={()=>{
      navigate(`./../detail/${topRated[i].title}`);
    }}>
      <TopRatedTitle>{topRated[i].title}</TopRatedTitle>
      <TopRatedItemImg src={image_path}/>
    </TopRatedItem>
  )
}

export default TopRatedItems;
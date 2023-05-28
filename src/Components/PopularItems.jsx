import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PopularItem = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  border-radius : 8px;
`

const PopularItemImg = styled.img`
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

const PopularTitle = styled.p`
  color : #fff;
  font-size : 18px;
  padding : 0 12px;
`

const PopularItems = ({popular, i}) => {

  const image_path = `https://image.tmdb.org/t/p/w500/${popular[i].poster_path}`;

  const navigate = useNavigate();
  
  return(
    <PopularItem onClick={()=>{
      navigate(`./../detail/${popular[i].title}`);
    }}>
      <PopularTitle>{popular[i].title}</PopularTitle>
      <PopularItemImg src={image_path}/>
    </PopularItem>
  )
}

export default PopularItems;
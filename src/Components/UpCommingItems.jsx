import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UpCommingItem = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  border-radius : 8px;
`

const UpCommingItemImg = styled.img`
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

const UpCommingTitle = styled.p`
  color : #fff;
  font-size : 18px;
  padding : 0 12px;
`

const UpCommingItems = ({upComming, i}) => {

  const image_path = `https://image.tmdb.org/t/p/w500/${upComming[i].poster_path}`;

  const navigate = useNavigate();
  
  return(
    <UpCommingItem onClick={()=>{
      navigate(`./../detail/${upComming[i].title}`);
    }}>
      <UpCommingTitle>{upComming[i].title}</UpCommingTitle>
      <UpCommingItemImg src={image_path}/>
    </UpCommingItem>
  )
}

export default UpCommingItems;
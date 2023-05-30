import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NowPlayingItem = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  border-radius : 8px;
`

const NowPlayingItemImg = styled.img`
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

const NowPlayingTitle = styled.p`
  color : #fff;
  font-size : 18px;
  padding : 0 12px;
`

const NowPlayingItems = ({item, i}) => {

  const image_path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

  const navigate = useNavigate();
  
  return(
    <NowPlayingItem onClick={()=>{
      navigate(`./../detail/${item.title}`);
    }}>
      <NowPlayingTitle>{item.title}</NowPlayingTitle>
      <NowPlayingItemImg src={image_path}/>
    </NowPlayingItem>
  )
}

export default NowPlayingItems;
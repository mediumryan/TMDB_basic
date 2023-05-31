import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MovieItem = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  border-radius : 8px;
`

const MovieItemImg = styled.img`
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

const MovieTitle = styled.p`
  color : #fff;
  font-size : 18px;
  padding : 0 12px;
`

const MovieItems = ({datas}) => {

  const image_path = `https://image.tmdb.org/t/p/w500/${datas.poster_path}`;

  const navigate = useNavigate();
  
  return(
    <MovieItem onClick={()=>{
      navigate(`./../detail/${datas.title}`);
    }}>
      <MovieTitle>{datas.title}</MovieTitle>
      <MovieItemImg src={image_path}/>
    </MovieItem>
  )
}

export default MovieItems;
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AllItem = styled.div`
  position : relative;
  width : 100%;
  height : 100%;
  min-height : 240px;
  display : flex;
  align-items : center;
  justify-content : center;
  border-radius : 8px;
`

const AllItemImg = styled.img`
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

const AllTitle = styled.p`
  color : #fff;
  font-size : 18px;
  padding : 0 12px;
`

const AllItems = ({allData, i}) => {

  const image_path = `https://image.tmdb.org/t/p/w500/${allData[i].poster_path}`;

  const navigate = useNavigate();
  
  return(
    <AllItem onClick={()=>{
      navigate(`./../detail/${allData[i].title}`);
    }}>
      <AllTitle>{allData[i].title}</AllTitle>
      <AllItemImg src={image_path}/>
    </AllItem>
  )
}

export default AllItems;
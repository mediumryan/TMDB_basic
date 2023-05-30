import styled from 'styled-components';
import { useState } from 'react';
// import components
import HomeItems from './../Components/HomeItems';

const HomeContainer = styled.div`
  background-color : #000;
  padding : 12px 0;
  display : grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas: 
    "a b"
    "c d";
`

const Home = ({nowPlaying,popular,topRated,upComming}) => {

  const [homeData] = useState([nowPlaying[2],nowPlaying[0],popular[1],topRated[0],upComming[0]]);
  const [homeOtherData] = useState([
    {
    title : '모든영화',
    movoTo : 'all',
    },
    {
    title : '상영중',
    movoTo : 'nowplaying',
    },
    {
    title : '인기영화',
    movoTo : 'popular',
    },
    {
    title : '평점순',
    movoTo : 'top-rated',
    },
    {
    title : '개봉예정',
    movoTo : 'up-comming',
    },
                                   ]);
  
  return(
    <HomeContainer className='sections'>
      {
        homeData.map((item,index) => {
          return (
            <HomeItems 
              homeData={homeData}
              homeOtherData={homeOtherData}
              i={index}
              key={index}/>
          )
        })
      }
    </HomeContainer>
  )
}

export default Home;
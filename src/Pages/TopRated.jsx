import styled from 'styled-components';
import { useState } from 'react';
// import components
import TopRatedItems from './../Components/TopRatedItems';

const TopRatedContainer = styled.div`
  background-color : #000;
  height : 100vh;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-rows : repeat(auto, 1fr);
  grid-template-columns : repeat(5, 1fr);
`

const TopRated = ({topRated}) => {
  return(
    <TopRatedContainer>
      {
        topRated.map((item,index) => {
          return(
            <TopRatedItems 
              key={index}
              topRated={topRated}
              i={index}
              />
          )
        })
      }
    </TopRatedContainer>
  )
}

export default TopRated;
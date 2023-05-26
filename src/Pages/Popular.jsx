import styled from 'styled-components';
import { useState } from 'react';
// import components
import PopularItems from './../Components/PopularItems';

const PopularContainer = styled.div`
  background-color : #000;
  height : 100vh;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-rows : repeat(4, 1fr);
  grid-template-columns : repeat(5, 1fr);
`

const Popular = ({popular}) => {
  return(
    <PopularContainer>
      {
        popular.map((item,index) => {
          return(
            <PopularItems 
              key={index}
              popular={popular}
              i={index}
              />
          )
        })
      }
    </PopularContainer>
  )
}

export default Popular;
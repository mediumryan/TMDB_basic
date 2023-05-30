import styled from 'styled-components';
import { useState } from 'react';
// import components
import PopularItems from './../Components/PopularItems';

const PopularContainer = styled.div`
  background-color : #000;
  height : 100vh;
  overflow-y : scroll;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-columns : repeat(3, 1fr);
  grid-auto-rows : minmax(240px, auto);
`

const Popular = ({popular, search}) => {
  return(
    <PopularContainer>
      {
        popular.filter((i) => {
          return search.trim() === '' ? i : i.title.trim().includes(search);
        }).map((item,index) => {
          return(
            <PopularItems 
              key={index}
              popularItem={item}
              i={index}
              />
          )
        })
      }
    </PopularContainer>
  )
}

export default Popular;
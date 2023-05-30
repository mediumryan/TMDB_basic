import styled from 'styled-components';
import { useState } from 'react';
// import components
import TopRatedItems from './../Components/TopRatedItems';

const TopRatedContainer = styled.div`
  background-color : #000;
  height : 100vh;
  overflow-y : scroll;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-columns : repeat(3, 1fr);
  grid-auto-rows : minmax(240px, auto);
`

const TopRated = ({topRated, search}) => {
  return(
    <TopRatedContainer>
      {
        topRated.filter((i) => {
          return search.trim() === '' ? i : i.title.trim().includes(search);
        }).map((item,index) => {
          return(
            <TopRatedItems 
              key={item.id}
              topRatedItem={item}
              />
          )
        })
      }
    </TopRatedContainer>
  )
}

export default TopRated;
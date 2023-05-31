import styled from 'styled-components';
import { useState } from 'react';
// import components
import MovieItems from './../components/MovieItems';

const MovieContainer = styled.div`
  background-color : #000;
  height : 100vh;
  overflow-y : scroll;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-columns : repeat(3, 1fr);
  grid-auto-rows : minmax(240px, auto);
`

const Movie = ({datas, search}) => {
  return(
    <MovieContainer>
      {
        datas.filter((item) => {
          return search.trim() === '' ? item : item.title.trim().includes(search);
        }).map((item,index) => {
        return(
          <MovieItems datas={item} key={item.id}/>
        )
      })
      }
    </MovieContainer>
  )
}

export default Movie;
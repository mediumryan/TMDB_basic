import styled from 'styled-components';
import { useState } from 'react';
// import components
import NowPlayingItems from './../Components/NowPlayingItems';

const NowPlayingContainer = styled.div`
  background-color : #000;
  height : 100vh;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-rows : repeat(4, 1fr);
  grid-template-columns : repeat(5, 1fr);
`

const NowPlaying = ({nowPlaying}) => {
  return(
    <NowPlayingContainer>
      {
        nowPlaying.map((item,index) => {
          return(
            <NowPlayingItems 
              key={index}
              nowPlaying={nowPlaying}
              i={index}
              />
          )
        })
      }
    </NowPlayingContainer>
  )
}

export default NowPlaying;
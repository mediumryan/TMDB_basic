import styled from 'styled-components';
// import components
import NowPlayingItems from './../Components/NowPlayingItems';

const NowPlayingContainer = styled.div`
  background-color : #000;
  height : 100vh;
  overflow-y : scroll;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-columns : repeat(3, 1fr);
  grid-auto-rows : minmax(240px, auto);
`

const NowPlaying = ({nowPlaying, search}) => {

  return(
    <NowPlayingContainer>
      {
        nowPlaying.filter((i) => {
          return search.trim() === '' ? i : i.title.trim().includes(search);
        }).map((item,index) => {
          return(
            <NowPlayingItems 
              key={item.id}
              nowPlayingItem={item}
              />
          )
        })
      }
    </NowPlayingContainer>
  )
}

export default NowPlaying;
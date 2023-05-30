import styled from 'styled-components';
import { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
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

const NowPlaying = ({nowPlaying}) => {

  const [search, setSearch] = useState('');

  return(
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder='Search any movie'
          onChange={(e)=>{setSearch(e.target.value)}}
        />
      </InputGroup>
      <NowPlayingContainer>
        {
          nowPlaying.filter((i) => {
            return search.trim() === '' ? i : i.title.trim().includes(search);
          }).map((item,index) => {
            return(
              <NowPlayingItems 
                key={item.id}
                item={item}
                i={index}
                />
            )
          })
        }
      </NowPlayingContainer>
    </>
  )
}

export default NowPlaying;
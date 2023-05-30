import styled from 'styled-components';
import { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
// import components
import AllItems from './../Components/AllItems';

const AllContainer = styled.div`
  background-color : #000;
  height : 100vh;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-rows : repeat(20, 1fr);
  grid-template-columns : repeat(4, 1fr);
  overflow : scroll;
`

const All = ({nowPlaying,popular,topRated,upComming}) => {

  const [search, setSearch] = useState('');
  // 모든영화 데이터
  const [allData] = useState([
    ...nowPlaying,
    ...popular,
    ...topRated,
    ...upComming
  ]);
  
  return(
    <AllContainer>
      <InputGroup
        className="mb-3">
        <Form.Control
          onChange={(e)=>{setSearch(e.target.value)}}
          className='search-box'
          placeholder='search'
        />
      </InputGroup>
      {
        allData.filter((i) => {
          return search.toLowerCase() === '' ? i : i.original_title.toLowerCase().includes(search)
        }).map((item,index) => {
          return(
            <AllItems 
              key={index}
              allData={allData}
              i={index}
              />
          )
        })
      }
    </AllContainer>
  )
}

export default All;
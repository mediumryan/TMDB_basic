import styled from 'styled-components';
import { useState } from 'react';
// import components
import UpCommingItems from './../Components/UpCommingItems';

const UpCommingContainer = styled.div`
  background-color : #000;
  height : 100vh;
  padding : 12px 0;
  display : grid;
  grid-gap : 8px;
  grid-template-rows : repeat(auto, 1fr);
  grid-template-columns : repeat(4, 1fr);
`

const UpComming = ({upComming}) => {
  return(
    <UpCommingContainer>
      {
        upComming.map((item,index) => {
          return(
            <UpCommingItems 
              key={index}
              upComming={upComming}
              i={index}
              />
          )
        })
      }
    </UpCommingContainer>
  )
}

export default UpComming;
import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(240px, auto);
  grid-gap: 8px;
  @media screen and (max-width: 413px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

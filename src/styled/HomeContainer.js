import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 480px);
  grid-auto-rows: minmax(360px, auto);
  grid-gap: 8px;
  justify-content: center;
  @media screen and (max-width: 413px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

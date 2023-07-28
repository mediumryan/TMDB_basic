import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailCard = styled.div`
  background-color: var(--bg-400);
  position: relative;
  width: 100%;
  height: 780px;
`;

export const DetailImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DetailDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: var(--primary-100);
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  padding: 0 25%;
  p {
    font-size: 22px;
    margin: 24px;
    line-height: 1.5;
    @media screen and (max-width: 413px) {
      font-size: 18px;
    }
  }
  p:first-child {
    text-align: center;
    font-size: 48px;
    @media screen and (max-width: 413px) {
      font-size: 36px;
    }
  }
`;

export const DetailStory = styled.div`
  width: 100%;
  height: 50%;
  overflow-y: scroll;
  p:nth-child(2) {
    line-height: 1.5;
    font-size: 18px;
  }
`;

import styled from "styled-components";
import { FaReply } from "react-icons/fa";

export const BackBtn = styled(FaReply)`
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  color: var(--accent-100);
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s all ease-in;
  &:hover {
    transform: rotate(360deg);
  }
  z-index: 999;
  @media screen and (max-width: 413px) {
    left: 7.5%;
  }
`;

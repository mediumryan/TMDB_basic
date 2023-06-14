import styled from "styled-components";
import { FaSortUp } from "react-icons/fa";

export const NavContainer = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(#ee1d52, #ff607e);
  padding: 1rem;
  margin-bottom: 2rem;
  color: #ffcddf;
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 413px) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

export const NavTitle = styled.div`
  margin-right: 24px;
  cursor: pointer;
  h1 {
    font-size: 32px;
    font-weight: 900;
  }
`;

export const NavMenu = styled.ul`
  margin: 8px 0;
  display: flex;
  align-items: center;
  li {
    padding: 8px 12px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    border-radius: 12px;
    transition: 300ms all;
    &:hover {
      color: #ee1d52;
      background-color: #ffcddf;
    }
    @media screen and (max-width: 413px) {
      width: 75%;
      margin: 0 auto;
      text-align: center;
    }
  }
  @media screen and (max-width: 413px) {
    width: 100%;
    flex-direction: column;
    display: ${({ rotate }) => (rotate === 0 ? "none" : "block")};
  }
`;

export const SortIcon = styled(FaSortUp)`
  display: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "rotate(0)")};
  font-size: 24px;
  &:hover {
    color: #ffc107;
  }
  @media screen and (max-width: 413px) {
    display: block;
  }
`;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaAngleDown, FaSortDown, FaSortUp } from "react-icons/fa";

const NavContainer = styled.nav`
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

const NavTitle = styled.div`
  margin-right: 24px;
  cursor: pointer;
  h1 {
    font-size: 32px;
    font-weight: 900;
  }
`;

const NavMenu = styled.ul`
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
    display: ${({ rotate }) => (rotate === 0 ? "none" : "block")};
  }
  @media screen and (max-width: 413px) {
    flex-direction: column;
  }
`;

const SortIcon = styled(FaSortUp)`
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

export default function MainNav() {
  const navigate = useNavigate();

  const [click, setClick] = useState(0);
  const handleClick = () => setClick(click ? 0 : 1);

  return (
    <NavContainer>
      <NavTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>Ryan Movie</h1>
      </NavTitle>
      <NavMenu rotate={click}>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/now-playing");
          }}
        >
          Now-Playing
        </li>
        <li
          onClick={() => {
            navigate("/popular");
          }}
        >
          Popular
        </li>
        <li
          onClick={() => {
            navigate("/top-rated");
          }}
        >
          Top-Rated
        </li>
        <li
          onClick={() => {
            navigate("/up-coming");
          }}
        >
          Up-Coming
        </li>
      </NavMenu>
      {click ? (
        <SortIcon rotate={0} onClick={handleClick} />
      ) : (
        <SortIcon rotate={1} onClick={handleClick} />
      )}
    </NavContainer>
  );
}

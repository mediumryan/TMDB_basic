import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  background: linear-gradient(#ee1d52, #ff607e);
  padding: 1rem;
  margin-bottom: 2rem;
  color: #ffcddf;
  border-radius: 0 0 10px 10px;
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
  }
`;

export default function MainNav() {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NavTitle
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>Ryan Movie</h1>
      </NavTitle>
      <NavMenu>
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
    </NavContainer>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavTitle, NavMenu, SortIcon } from "../styled/StyledNav";

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

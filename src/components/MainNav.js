import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavTitle, NavMenu, SortIcon } from "../styled/StyledNav";
import { homeOtherData } from "../datas/homeOtherData";

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
          ホーム
        </li>
        <li
          onClick={() => {
            navigate("/now-playing");
          }}
        >
          {homeOtherData[0].title}
        </li>
        <li
          onClick={() => {
            navigate("/popular");
          }}
        >
          {homeOtherData[1].title}
        </li>
        <li
          onClick={() => {
            navigate("/top-rated");
          }}
        >
          {homeOtherData[2].title}
        </li>
        <li
          onClick={() => {
            navigate("/up-coming");
          }}
        >
          {homeOtherData[3].title}
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

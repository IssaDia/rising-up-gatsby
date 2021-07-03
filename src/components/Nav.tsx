import React from "react";
import styled from "styled-components";

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  heignt: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.33rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
  }
`;

const Nav: React.FC = () => {
  return (
    <div>
      <MenuIcon>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <p>Hello</p>
    </div>
  );
};

export default Nav;

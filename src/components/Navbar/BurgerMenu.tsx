import React, { useState } from "react";
import styled from "styled-components";
import Links from "./Links";

const HamburgerMenu = styled.div<{ open: boolean }>`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 4px;
    background: white;
    transition: 0.3s ease;
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(-5px, 6px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translate(-5px, -6px)" : "rotate(0)"};
    }
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 2.5%;
    right: 3%;
  }
`;

interface OpenProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<OpenProps> = ({ open, setOpen }) => {
  return (
    <>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
      <Links open={open} />
    </>
  );
};

export default BurgerMenu;

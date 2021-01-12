import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaStoreAlt } from "react-icons/fa";
import BurgerMenu from "./BurgerMenu";

const Navbar = styled.nav<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1b7fbd;
  min-height: 6vh;
  padding: 0 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: white;
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar open={open}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <H2>
          Odinzom <FaStoreAlt style={{ verticalAlign: "middle" }} />
        </H2>
      </Link>
      <BurgerMenu open={open} setOpen={setOpen} />
    </Navbar>
  );
};

export default Nav;

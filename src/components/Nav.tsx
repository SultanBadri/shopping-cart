import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaStoreAlt } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1b7fbd;
  min-height: 8vh;
  padding: 0 3rem;
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: white;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
`;

const Li = styled.div`
  text-decoration: none;
  color: white;
`;

const Nav = () => {
  return (
    <Navbar>
      <H2>
        Odinzom <FaStoreAlt style={{ verticalAlign: "middle" }} />
      </H2>
      <Ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Li>
            {" "}
            <TiHomeOutline /> Home
          </Li>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <Li>
            {" "}
            <BiShoppingBag /> Shop
          </Li>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <Li>
            {" "}
            <CgShoppingCart />
            Cart
          </Li>
        </Link>
      </Ul>
    </Navbar>
  );
};

export default Nav;

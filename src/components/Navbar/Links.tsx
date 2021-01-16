import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const Ul = styled.ul<Condition>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;

  li {
    text-decoration: none;
    color: white;
    list-style: none;
    transition: all 0.3s ease;
  }

  li:hover {
    color: #f7ec77;
  }

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    flex-direction: column;
    width: 100%;
    padding: 0;

    li {
      text-align: center;
      padding: 0.5rem;
    }
    li:hover {
      color: white;
      background: #474b52;
    }
  }
`;

interface Condition {
  open: boolean;
  cartItems: never[];
}

const Links: React.FC<Condition> = ({ open, cartItems }) => {
  return (
    <Ul open={open} cartItems={cartItems}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <li>
          {" "}
          <TiHomeOutline /> Home
        </li>
      </Link>
      <Link to="/shop" style={{ textDecoration: "none" }}>
        <li>
          {" "}
          <BiShoppingBag /> Shop
        </li>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <li>
          {" "}
          <CgShoppingCart />
          Cart {cartItems.length > 0 ? `(${cartItems.length})` : null}
        </li>
      </Link>
    </Ul>
  );
};

export default Links;

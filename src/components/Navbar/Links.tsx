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
  transition: all 0.3s ease;

  li {
    text-decoration: none;
    color: white;
    list-style: none;
  }

  li:hover {
    color: #f7ec77;
  }

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    display: block;
    opacity: ${({ open }) => (open ? "1" : "0")};
    height: ${({ open }) => (open ? "120px" : "0")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
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
  const totalItems = () => {
    return cartItems
      .map((cartItem: any) => cartItem.quantity)
      .reduce((a: number, b: number) => a + b, 0);
  };

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
          Cart {cartItems.length > 0 ? `(${totalItems()})` : null}
        </li>
      </Link>
    </Ul>
  );
};

export default Links;

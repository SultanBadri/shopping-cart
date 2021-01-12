import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;

const Cart = () => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Cart";
  }

  return <H1>Cart</H1>;
};

export default Cart;
